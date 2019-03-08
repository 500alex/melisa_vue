export default {
    namespaced: true,
    state: {
        trends: [
            {text:'Бачата', url:'bachata'},
            {text:'Сальса', url:'salsa'},
            {text:'Танго', url:'tango'},
            {text:'Дискофокс', url:'disco'},
            {text:'Меренга', url:'mernga'},
            {text:'Групповые номера', url:'all'},
        ],
    },
    getters: {
        getTrends (state){
            return state.trends
        }
    },
    mutations: {},

}