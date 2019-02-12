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
            {text:'Бачата', url:'/trend'},
            {text:'Сальса', url:'/trend'},
            {text:'Танго', url:'/trend'}
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