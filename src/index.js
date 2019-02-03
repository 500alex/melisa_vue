import Vue from 'vue'
import counter from './components/counter.vue'


import io from 'socket.io-client';

const socket = io('http://localhost:5000');

socket.on('connect', ()=>{
    console.log('socket client connected');
});



var app = new Vue({
    el: '#app',
    data: {
        message: 'hello'
    },
    components: {
        counter
    }
});


