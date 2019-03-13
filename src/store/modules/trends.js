export default {
    namespaced: true,
    state: {
        trends: [
            {description: 'Описание Бачата',icon: 'img/dance1.png',text:'Бачата', url:'bachata'},
            {description: 'Описание Сальса',icon: 'img/dance2.png',text:'Сальса', url:'salsa'},
            {description: 'Описание Танго',icon: 'img/dance3.png',text:'Танго', url:'tango'},
            {description: 'Описание Диско',icon: 'img/dance1.png',text:'Дискофокс', url:'disco'},
            {description: 'Описание Меренга',icon: 'img/dance2.png',text:'Меренга', url:'merenga'},
            {description: 'Описание Всех направлений',icon: 'img/dance3.png',text:'Групповые номера', url:'all'},
        ],
    },
    getters: {
        getTrends (state){
            return state.trends
        }
    },
    mutations: {},

}