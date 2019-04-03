import * as fb from 'firebase';

class User {
    constructor (id) {
        this.id = id;
    }
}

export default {
    namespaced: true,
    state: {
        isAdmin: false,
        user: null,
        adminLinks: [
            {id: 0, text: 'Новости', url: '/admin/news',icon: 'person'},
            {id: 1, text: 'Альбомы', url: '/admin/albums',icon: 'person'},
            {id: 2, text: 'Страницы', url: '/admin/pages',icon: 'person'},
        ]
    },
    getters: {
        getAdminLinks (state){
            return state.adminLinks;
        },
        getAdmin (state) {
            return state.isAdmin
        },
        user (state){
            return state.user
        },
        isUserLoggedIn (state){
            return state.user !== null
        }

    },
    mutations: {
        setAdmin (state,payload) {
            state.isAdmin = payload;
        },
        setUser (state,payload) {
            state.user = payload;
        }
    },
    actions: {
        async registerUser ({commit},{email,password}){
             commit('shared/clearError',null,{ root: true });
             commit('shared/setLoading',true,{ root: true });

            try {
                const user = await fb.auth().createUserWithEmailAndPassword(email, password);
                commit('setUser', new User(user.uid));
                commit('shared/setLoading',false,{ root: true });
            }catch (error){
                 commit('shared/setLoading', false,{ root: true });
                 commit('shared/setError',error.message,{ root: true });
                throw error
            }
        },
        async loginUser ({commit}, {email,password}) {
             commit('shared/clearError',null,{ root: true });
             commit('shared/setLoading',true,{ root: true });

            try {
                const user = await fb.auth().signInWithEmailAndPassword(email, password);
                commit('setUser', new User(user.uid));
                commit('shared/setLoading',false,{ root: true });
            }catch (error){
                 commit('shared/setLoading', false,{ root: true });
                 commit('shared/setError',error.message,{ root: true });
                throw error
            }
        },
        autoLoginUser ({commit}, payload) {
            commit('setUser', new User(payload.uid))
        },
        logoutUser ({commit}){
            fb.auth().signOut()
            commit('setUser', null);
        }

    }
}