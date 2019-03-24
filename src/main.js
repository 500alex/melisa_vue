import Vue from 'vue'
import Vuetify from 'vuetify'
//import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
// import '@fortawesome/fontawesome-free/css/all.css'
import router from './router'
import store from './store/index.js'
import Swiper from 'swiper';
import 'babel-polyfill'
import * as fb from 'firebase'

import './images/11.jpeg'
import './images/dance1.png'
import './images/dance2.png'
import './images/dance3.png'


Vue.use(Vuetify,{
    iconfont: 'md', // 'md' || 'mdi' || 'fa' || 'fa4'
    // icons: {
    //     'album': 'fas fa-book-open',
    //     'menu': 'fas fa-tty'
    // },
    theme: {
        primary: colors.red.darken1, // #E53935
        secondary: colors.red.lighten4, // #FFCDD2
        accent: colors.indigo.base // #3F51B5
    }
});
import componet from './components.js';
componet(Vue);

import io from 'socket.io-client';

//css
import './css/variables.scss'
import './css/style.scss'

// const socket = io('http://localhost:5000');
//
// socket.on('connect', ()=>{
//     console.log('socket client connected');
// });


// Example
// let swiper = new Swiper('.swiper-container', {
//     // slidesPerView: 5,
//     direction: 'horizontal',
//     slidesPerView: 'auto',
//     freeMode: true,
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
//     mousewheel: true,
// });


var app = new Vue({
    el: '#app',
    router,
    store,
    created () {
        var config = {
            apiKey: "AIzaSyAHCBLvJckC-wlXQlRahOWpiunMCf1KjCs",
            authDomain: "melissa-6bf5e.firebaseapp.com",
            databaseURL: "https://melissa-6bf5e.firebaseio.com",
            projectId: "melissa-6bf5e",
            storageBucket: "melissa-6bf5e.appspot.com",
            messagingSenderId: "1079590374781"
        };
        fb.initializeApp(config);
}
});


