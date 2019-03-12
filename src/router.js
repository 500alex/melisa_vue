import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import Contact from './pages/Contact.vue'
import News from './pages/News.vue'
import New from './pages/New.vue'
import NewFull from './pages/newFull.vue'
import Trend from './pages/Trend.vue'
import Photo from './pages/photo.vue'
import Video from './pages/video.vue'



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
            path: '/photo',
            name: 'photo',
            component: Photo
        },
        {
            path: '/video',
            name: 'video',
            component: Video
        },
        {
            path: '/news',
            name: 'news',
            component: News
        },
        {
            path: '/new/:id',
            name: 'new',
            component: New,
            children: [
                {
                path: 'full',
                name: 'newFull',
                component: NewFull
                }
            ]
        },
        {
            path: '/trend/:id',
            name: 'trend',
            component: Trend
        },
        {
            path: '*',
            redirect: {
                name: 'home'
            }
        }
    ],

})