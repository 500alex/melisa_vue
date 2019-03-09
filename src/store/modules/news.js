export default {
    namespaced: true,
    state: {
        newsList: [
            {id: 0, text:'Tell about most important steps of making a project. It will add credibility 1', data: '10 Февраля 2019'},
            {id: 1, text:'Tell about most important steps of making a project. It will add credibility 2', data: '5 Января 2019'},
            {id: 2, text:'Tell about most important steps of making a project. It will add credibility 3', data: '8 марта 2019'},
        ]
    },
    getters: {
        getNews (state) {
            return state.newsList;
        }
    },
    mutations: {},

}