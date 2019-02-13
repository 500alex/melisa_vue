export default {
    namespaced: true,
    state: {
        trends: [
            {text:'Бачата', url:'bachata'},
            {text:'Сальса', url:'salsa'},
            {text:'Танго', url:'tango'}
        ],
    },
    getters: {
        getTrends (state){
            return state.trends
        }
    },
    mutations: {},

}