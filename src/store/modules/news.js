import * as fb from 'firebase';

class News {
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
        selected: [1],
        newsList: []
    },
    getters: {
        getNewsById(state) {
            return  adId => {
               return state.newsList.find(ad => ad.id === adId)
            }
            // return function (id) {
            //     return state.newsList.find(function (item) {
            //         item.id === id;
            //     })
            // }
        },
        getSelected (state){
            return state.selected;
        },
        getNews (state) {
            return state.newsList;
        }
    },
    mutations: {
        pushSelected (state,payload) {
            state.selected.push(payload);
        },
        deleteSelected (state,i) {
            state.selected.splice(i, 1);
        },
        loadNews (state,payload) {
            state.newsList = payload;
        },
        updateNews (state,{title,shortDescription,description,id}) {
            const ad = state.newsList.find(a => {
                return a.id === id
            });
            ad.title = title;
            ad.shortDescription = shortDescription;
            ad.description = description;
        }

    },
    actions: {
        async createNews ({commit,getters},payload){
            // commit('shared/clearError',null,{ root: true });
            // commit('shared/setLoading',true,{ root: true });
            try {
                const news = {
                    title: payload.title,
                    shortDescription: payload.shortDescription,
                    description: payload.description,
                    data: payload.data,
                }
                const ad = await fb.database().ref('news').push(news);
            }catch (e) {
                // commit('shared/setError',e.message,{ root: true });
                // commit('shared/setLoading',false,{ root: true });
                throw e
            }
        },
        async fetchNews ({commit}){
            // commit('shared/clearError',null,{ root: true });
            // commit('shared/setLoading',true,{ root: true });

            var resultNewsList = [];

            try {
                const fbVal = await fb.database().ref('news').once('value');
                const news = fbVal.val();

                Object.keys(news).forEach(key => {
                    const ad = news[key]
                    resultNewsList.push(
                        new News(ad.title, ad.shortDescription, ad.description, key)
                    )
                });

                // commit('shared/setLoading',false,{ root: true });
                commit('loadNews',resultNewsList);

            }catch (e) {

                // commit('shared/setError',e.message,{ root: true });
                // commit('shared/setLoading',false,{ root: true });
                throw e

            }
        },
        async updateNews ({commit},{title,shortDescription,description,id}){
            commit('clearError');
            commit('setLoading',true);
            try {
                await fb.database().ref('news').child(id).update({
                    title, shortDescription,description
                });
                commit('updateNews', {
                   title,shortDescription,description,id
                });
                commit('setLoading',false);
            }catch (e) {
                // commit('shared/setError',e.message,{ root: true });
                // commit('shared/setLoading',false,{ root: true });
                throw e
            }
        }
    }

}