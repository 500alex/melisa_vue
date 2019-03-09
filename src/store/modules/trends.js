export default {
    namespaced: true,
    state: {
        trends: [
            {description: 'Описание направления',icon: 'img/dance1.png',text:'Бачата', url:'bachata'},
            {description: 'Описание направления',icon: 'img/dance2.png',text:'Сальса', url:'salsa'},
            {description: 'Описание направления',icon: 'img/dance3.png',text:'Танго', url:'tango'},
            {description: 'Описание направления',icon: 'img/dance1.png',text:'Дискофокс', url:'disco'},
            {description: 'Описание направления',icon: 'img/dance2.png',text:'Меренга', url:'merenga'},
            {description: 'Описание направления',icon: 'img/dance3.png',text:'Групповые номера', url:'all'},
        ],
    },
    getters: {
        getTrends (state){
            return state.trends
        }
    },
    mutations: {},

}