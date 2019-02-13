export default {
    namespaced: true,
    state: {
        newsList: [
            {text:'новость 1', id: 0},
            {text:'новость 2', id: 1},
            {text:'новость 3', id: 2},
        ]
    },
    getters: {
        getNews (state) {
            return state.newsList;
        }
    },
    mutations: {},

}