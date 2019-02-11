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
            {text:'Контакты',icon: 'person', url: '/contact'},
            {text:' Магазин',icon: 'person', url: '/shop'},
            {text:'Выступления',icon: 'person', url: '/video'}
        ]
    },
    getters: {
        getLinks (state) {
            return  state.links
        }
    }
})