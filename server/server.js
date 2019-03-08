const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
// const mongoose = require('mongoose');
var mariadb = require('mariadb');

mariadb
    .createConnection({
        host: 'localhost',
        ssl: false,
        user: 'root',
        password:'12345',
        database:'melis'

    }).then(conn => {
    conn.query('SELECT * FROM news') // Execute a query
        .then(result => { // Print the results
            for (row of result) {
                console.log(row)
            }
        })

})

// mongoose.connect('mongodb://localhost/one', { useNewUrlParser: true })
//     .then(()=>{
//         console.log('Mongo has started!');
//     })
//     .catch(e => console.log(e));
//
// require('../model/news');
//
// const News = mongoose.model('news');
//
// const news = new News({
//     label: 'label1',
//     text: 'text1'
// });

// news.save().then((data)=>{
//     console.log(data)
// }).catch(e=>console.log(e))

// News.find({}).then(news=>{
//     console.log(news)
// })


//app.use(express.static(path.join(__dirname, '../www')));
app.use(bodyParser.json());

// io.on('connection', ()=>{
//     console.log('socket start');
// });
//
//


server.listen(5000, (client)=>{
    console.log('server started');
});




