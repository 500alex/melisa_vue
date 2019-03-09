import Vue from 'vue';
import Vuex from 'vuex'
import counter from './modules/counter'
import news from './modules/news.js'
import trends from './modules/trends'
import photo from './modules/photo'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        counter,news,trends,photo
    },
    state: {
        links: [
            {text:'Альбомы',icon: 'style', url: '/albums'},
            {text:'Новости',icon: 'mood', url: '/news'},
            {text:'Контакты',icon: 'phone', url: '/contact'},
        ],
    },
    getters: {
        getLinks (state) {
            return  state.links
        },

    }
})