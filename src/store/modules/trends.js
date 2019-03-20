export default {
    namespaced: true,
    state: {
        trends: [
            {description: 'Описание Бачата',icon: './images/dance1.png',text:'Бачата', url:'bachata'},
            {description: 'Описание Сальса',icon: './images/dance2.png',text:'Сальса', url:'salsa'},
            {description: 'Описание Танго',icon: './images/dance3.png',text:'Танго', url:'tango'},
            {description: 'Описание Диско',icon: './images/dance1.png',text:'Дискофокс', url:'disco'},
            {description: 'Описание Меренга',icon: './images/dance2.png',text:'Меренга', url:'merenga'},
            {description: 'Описание Всех направлений',icon: './images/dance3.png',text:'Групповые номера', url:'all'},
        ],
    },
    getters: {
        getTrends (state){
            return state.trends
        }
    },
    mutations: {},

}