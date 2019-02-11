import Vue from 'vue';
import VueRouter from 'vue-router';
import p_index from './pages/p_index.vue';


Vue.use(VueRouter);


export default new VueRouter({
    linkActiveClass: "active",
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'p_index',
            component: p_index
        },
    ],

})