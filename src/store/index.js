import Vue from 'vue';
import Vuex from 'vuex'
import counter from './modules/counter'
import news from './modules/news.js'
import trends from './modules/trends'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        counter,news,trends
    },
    state: {
        links: [
            {text:'Альбомы',icon: 'person', url: '/albums'},
            {text:'Новости',icon: 'person', url: '/news'},
            {text:'Контакты',icon: 'person', url: '/contact'},
        ],
    },
    getters: {
        getLinks (state) {
            return  state.links
        },

    }
})