import * as fb from 'firebase';

class Album {
    constructor (title,shortDescription,description,id = null){
        this.title = title;
        this.shortDescription = shortDescription;
        this.description = description;
        this.id = id;
    }
}

export default {
    // namespaced: true,
    state: {
        albumList: []
    },
    getters: {
        getAlbumById(state) {
            return  adId => {
                return state.albumList.find(ad => ad.id === adId)
            }
            // return function (id) {
            //     return state.newsList.find(function (item) {
            //         item.id === id;
            //     })
            // }
        },
        getAlbums(state) {
            return state.albumList;
        }
    },
    mutations: {

        loadAlbums (state,payload) {
            state.albumList = payload;
        },
        updateAlbum (state,{title,shortDescription,description,id}) {
            const ad = state.albumList.find(a => {
                return a.id === id
            });
            ad.title = title;
            ad.shortDescription = shortDescription;
            ad.description = description;
        },
        addAlbum (state,payload){
            state.albumList.push(payload);
        },
        deleteAlbum(state,id) {
            state.albumList.forEach(function (item,i,arr) {
                if(item.id == id){
                    arr.splice(i,1)
                }
            })
        }

    },
    actions: {
        async createAlbum ({commit,getters},payload){
            commit('shared/clearError',null,{ root: true });
            commit('shared/setLoading',true,{ root: true });
            try {
                const album = {
                    title: payload.title,
                    shortDescription: payload.shortDescription,
                    description: payload.description,
                    data: payload.data,
                }
                const ad = await fb.database().ref('albums').push(album);
                commit('addAlbum',album);
            }catch (e) {
                commit('shared/setError',e.message,{ root: true });
                commit('shared/setLoading',false,{ root: true });
                throw e
            }
        },
        async deleteAlbum ({commit},id){
            commit('shared/clearError',null,{root:true});
            commit('shared/setLoading',true,{root:true});
            try {
                await fb.database().ref('albums').child(id).remove();
                commit('deleteAlbum', id);
                commit('shared/setLoading',false,{root:true});
            }catch (e) {
                commit('shared/setError',e.message,{ root: true });
                commit('shared/setLoading',false,{ root: true });
                throw e
            }
        },
        async fetchAlbums ({commit}){
            commit('shared/clearError',null,{ root: true });
            commit('shared/setLoading',true,{ root: true });

            var resultAlbumsList = [];

            try {
                const fbVal = await fb.database().ref('albums').once('value');
                const albums = fbVal.val();

                Object.keys(albums).forEach(key => {
                    const ad = albums[key]
                    resultAlbumsList.push(
                        new Album(ad.title, ad.shortDescription, ad.description, key)
                    )
                });

                commit('shared/setLoading',false,{ root: true });
                commit('loadAlbums',resultAlbumsList);

            }catch (e) {

                commit('shared/setError',e.message,{ root: true });
                commit('shared/setLoading',false,{ root: true });
                throw e

            }
        },
        async updateAlbum ({commit},{title,shortDescription,description,id}){
            commit('shared/clearError',null,{root:true});
            commit('shared/setLoading',true,{root:true});
            try {
                await fb.database().ref('albums').child(id).update({
                    title, shortDescription,description
                });
                commit('updateAlbum', {
                    title,shortDescription,description,id
                });
                commit('shared/setLoading',false,{root:true});
            }catch (e) {
                commit('shared/setError',e.message,{ root: true });
                commit('shared/setLoading',false,{ root: true });
                throw e
            }
        }
    }

}