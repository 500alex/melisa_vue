export default {
    namespaced: true,
    state: {
        trends: [
            {id: 0,description: 'Описание Бачата',icon: './images/dance1.png',title:'Бачата', url:'bachata'},
            {id: 1,description: 'Описание Сальса',icon: './images/dance2.png',title:'Сальса', url:'salsa'},
            {id: 2,description: 'Описание Танго',icon: './images/dance3.png',title:'Танго', url:'tango'},
            {id: 3,description: 'Описание Диско',icon: './images/dance1.png',title:'Дискофокс', url:'disco'},
            {id: 4,description: 'Описание Меренга',icon: './images/dance2.png',title:'Меренга', url:'merenga'},
            {id: 5,description: 'Описание Всех направлений',icon: './images/dance3.png',title:'Групповые номера', url:'all'},
        ],
    },
    getters: {
        getTrends (state){
            return state.trends
        }
    },
    mutations: {},

}