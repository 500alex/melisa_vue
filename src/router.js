import Vue from 'vue';
import VueRouter from 'vue-router';
import index from './pages/index.vue';


Vue.use(VueRouter);


export default new VueRouter({
    linkActiveClass: "active",
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: index
        },
    ],

})