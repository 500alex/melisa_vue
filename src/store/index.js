import Vue from 'vue';
import Vuex from 'vuex'
import counter from './modules/counter'
import news from './modules/news.js'
import trends from './modules/trends'
import photo from './modules/photo'
import albums from './modules/albums'
import admin from './modules/admin'
import shared from './modules/shared'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        counter,news,trends,photo,albums,shared,admin,
    },
    state: {
        links: [
            {text:'Альбомы',icon: 'videocam', url: '/albums'},
            {text:'Новости',icon: 'mood', url: '/news'},
            {text:'Контакты',icon: 'phone', url: '/contact'},
        ],

    },
    getters: {
        getLinks (state) {
            return  state.links
        },
    },
    mutations: {
        setAdmin (state,payload) {
            state.isAdmin = payload;
        }
    }

})