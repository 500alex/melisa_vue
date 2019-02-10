import Vue from 'vue'
import Vuetify from 'vuetify'
//import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'
// import '@fortawesome/fontawesome-free/css/all.css'
import router from './router'
import store from './store/index.js'
import 'babel-polyfill'

Vue.use(Vuetify,{
    iconfont: 'md', // 'md' || 'mdi' || 'fa' || 'fa4'
    options: {
        customProperties: true
    },
    theme: {
        primary: colors.indigo.darken-4, //
        secondary: colors.red.lighten4, // #FFCDD2
        accent: '#82B1FF',
    }
});
import componet from './components.js';
componet(Vue);

import io from 'socket.io-client';

//css
import './css/style.scss'

// const socket = io('http://localhost:5000');
//
// socket.on('connect', ()=>{
//     console.log('socket client connected');
// });



var app = new Vue({
    el: '#app',
    router,
    store,
    data: {
        message: 'hello'
    }
});


