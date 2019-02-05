const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);

//app.use(express.static(path.join(__dirname, '../www')));
app.use(bodyParser.json());

// io.on('connection', ()=>{
//     console.log('socket start');
// });
//
//
// server.listen(5000, (client)=>{
//     console.log('server started');
// });




