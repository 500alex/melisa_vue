export default {
    namespaced: true,
    state: {
        trends: [
            {id: 0,description: 'Описание Дискофокс',icon: './images/dance1.png',title:'Дискофокс', url:'disco'},
            {id: 1,description: 'Описание Сальса',icon: './images/dance3.png',title:'Сальса', url:'salsa'},
            {id: 2,description: 'Описание Меренга',icon: './images/dance3.png',title:'Меренга', url:'merenga'},
            {id: 3,description: 'Описание классическая хореография',icon: './images/dance2.png',title:'Классическая хореография', url:'classic'},

        ],
    },
    getters: {
        getTrends (state){
            return state.trends
        }
    },
    mutations: {},

}