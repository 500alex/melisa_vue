import Vue from 'vue'
import Vuetify from 'vuetify'
import counter from './components/counter.vue'

import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify)

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
    data: {
        message: 'hello'
    },
    components: {
        counter
    }
});


