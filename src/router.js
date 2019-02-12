import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import Contact from './pages/Contact.vue'
import Albums from './pages/Albums.vue'
import News from './pages/News.vue'
import Trend from './pages/Trend.vue'



Vue.use(VueRouter);


export default new VueRouter({
    linkActiveClass: "active",
    // mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact
        },
        {
            path: '/albums',
            name: 'albums',
            component: Albums
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
        {
            path: '/trend',
            name: 'trend',
            component: Trend
        },
    ],

})