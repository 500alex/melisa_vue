import Vue from 'vue';
import Vuex from 'vuex'
import counter from './modules/counter'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        counter
    },
    state: {
        links: [
            {text:'Альбомы',icon: 'person', url: '/albums'},
            {text:'Новости',icon: 'person', url: '/news'},
            {text:'Контакты',icon: 'person', url: '/contact'},
        ],
        trends: [
            {text:'Бачата', url:'bachata'},
            {text:'Сальса', url:'salsa'},
            {text:'Танго', url:'tango'}
        ],
        news: [
            {text:'новость 1', id: 0},
            {text:'новость 2', id: 1},
            {text:'новость 3', id: 2},
        ]
    },
    getters: {
        getLinks (state) {
            return  state.links
        },
        getTrends (state){
            return state.trends
        }
    }
})