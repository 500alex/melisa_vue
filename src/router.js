import Vue from 'vue';
import VueRouter from 'vue-router';
import authGuard from './auth-guard.js'
import Home from './pages/Home.vue';
import Contact from './pages/Contact.vue'
import News from './pages/News.vue'
import New from './pages/New.vue'
import Disco from './pages/disco.vue'
import Salsa from './pages/salsa.vue'
import Merenga from './pages/merenga.vue'
import Classic from './pages/classic.vue'
import NewFull from './pages/newFull.vue'
import Trend from './pages/Trend.vue'
import Albums from './pages/albums.vue'
import Album from './pages/album.vue'
import Login from './pages/login.vue'
import Registration from './pages/registration.vue'
import AdminNews from './pages/admin/adminNews.vue'
import AdminCreateNews from './pages/admin/adminCreateNews.vue'
import AdminCreateAlbum from './pages/admin/adminCreateAlbum.vue'
import AdminCreatePage from './pages/admin/adminCreatePage.vue'
import AdminEditNews from './pages/admin/adminEditNews.vue'
import AdminEditAlbum from './pages/admin/adminEditAlbum.vue'
import AdminEditPage from './pages/admin/adminEditPage.vue'
import AdminAlbums from './pages/admin/adminAlbums.vue'
import AdminPages from './pages/admin/adminPages.vue'
import AdminEditor from './pages/admin/adminEditor.vue'
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
            path: '/admin/albums',
            name: 'adminAlbums',
            component: AdminAlbums,
            // beforeEnter: authGuard
        },
        {
            path: '/admin/editor',
            name: 'adminEditor',
            component: AdminEditor,
            // beforeEnter: authGuard
        },
        {
            path: '/admin/createnews',
            name: 'adminCreateNews',
            component: AdminCreateNews,
            // beforeEnter: authGuard
        },
        {
            path: '/admin/createalbum',
            name: 'adminCreateAlbum',
            component: AdminCreateAlbum,
            // beforeEnter: authGuard
        },
        {
            path: '/admin/createpage',
            name: 'adminCreatePage',
            component: AdminCreatePage,
            // beforeEnter: authGuard
        },
        {
            path: '/admin/pages',
            name: 'adminPages',
            component: AdminPages,
            // beforeEnter: authGuard
        },
        {
            path: '/admin/editnews/:id',
            name: 'adminEditNews',
            component: AdminEditNews,
            // beforeEnter: authGuard
        },
        {
            path: '/admin/editalbum/:id',
            name: 'adminEditAlbum',
            component: AdminEditAlbum,
            // beforeEnter: authGuard
        },
        {
            path: '/admin/editpage/:id',
            name: 'adminEditPage',
            component: AdminEditPage,
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
        // {
        //     path: '/trend/:id',
        //     name: 'trend',
        //     component: Trend
        // },
        {
            path: '/disco',
            name: 'disco',
            component: Disco
        },
        {
            path: '/salsa',
            name: 'salsa',
            component: Salsa
        },
        {
            path: '/merenga',
            name: 'merenga',
            component: Merenga
        },
        {
            path: '/classic',
            name: 'classic',
            component: Classic
        },
        {
            path: '*',
            redirect: {
                name: 'home'
            }
        }
    ],

})