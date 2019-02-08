import Vue from 'vue';
import VueRouter from 'vue-router';
import contact from './pages/contact.vue'

Vue.use(VueRouter);


export default new VueRouter({
    linkActiveClass: "active",
    // mode: 'history',
    routes: [
        {
            path: '/contact',
            name: 'contact',
            component: contact
        }
    ],

})