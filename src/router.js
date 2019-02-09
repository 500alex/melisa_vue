import Vue from 'vue';
import VueRouter from 'vue-router';
import myindex from './pages/myindex.vue';


Vue.use(VueRouter);


export default new VueRouter({
    linkActiveClass: "active",
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'myindex',
            component: myindex
        },
    ],

})