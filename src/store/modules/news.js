export default {
    namespaced: true,
    state: {
        selected: [1]
    },
    getters: {
        getNews (state) {
            return state.newsList;
        },
        getSelected (state){
            return state.selected;
        }
    },
    mutations: {
        pushSelected (state,payload) {
            state.selected.push(payload);
        },
        deleteSelected (state,i) {
            state.selected.splice(i, 1);
        },

    },
    actions: {
        // createNews ({commit},payload){
        //     commit('createNews',payload);
        // }
    }

}