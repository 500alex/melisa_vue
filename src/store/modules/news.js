export default {
    namespaced: true,
    state: {
        newsList: [
            {id: 0,title: 'Заголовок новости 1', shortDescription:'Tell about most important ',description: '..steps of making a project. It will add credibility 1steps of making a project. It will add credibility 1steps of making a project. It will add credibility 1steps of making a project. It will add credibility 1steps of making a project. It will add credibility 1.', data: '10.02.2019'},
            {id: 1,title: 'Заголовок новости 2', shortDescription:'Tell about most important steps of making a project. It will add credibility 2',description: '...steps of making a project. It will add credibility 1steps of making a project. It will add credibility 1steps of making a project. It will add credibility 1', data: '05.03.2019'},
            {id: 2,title: 'Заголовок новости 3', shortDescription:'Tell about most important steps of making a project. It will add credibility 3',description: '.steps of making a project. It will add credibility 1steps of making a project. It will add credibility 1steps of making a project. It will add credibility 1steps of making a project. It will add credibility 1', data: '08.03.2019'},
        ],
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
        }
    },

}