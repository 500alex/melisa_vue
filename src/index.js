import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from './router'

Vue.use(Vuetify);
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
    data: {
        message: 'hello'
    }
});


