import Vue from 'vue';
import VueRouter from 'vue-router';
import authGuard from './auth-guard.js'
import Home from './pages/Home.vue';
import Contact from './pages/Contact.vue'
import News from './pages/News.vue'
import New from './pages/New.vue'
import NewFull from './pages/newFull.vue'
import Trend from './pages/Trend.vue'
import Albums from './pages/albums.vue'
import Album from './pages/album.vue'
import Login from './pages/login.vue'
import Registration from './pages/registration.vue'
import AdminNews from './pages/admin/adminNews.vue'
import AdminCreateNews from './pages/admin/adminCreateNews.vue'
import AdminEditNews from './pages/admin/adminEditNews.vue'
import store from "@/store";


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
            path: '/admin/news',
            name: 'adminNews',
            component: AdminNews,
            // beforeEnter: authGuard
        },
        {
            path: '/admin/createnews',
            name: 'adminCreateNews',
            component: AdminCreateNews,
            // beforeEnter: authGuard
        },
        {
            path: '/admin/editnews/:id',
            name: 'adminEditNews',
            component: AdminEditNews,
            // beforeEnter: authGuard
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/registration',
            name: 'registration',
            component: Registration
        },
        {
            path: '/albums',
            name: 'albums',
            component: Albums
        },
        {
            path: '/album/:id',
            name: 'album',
            component: Album,
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