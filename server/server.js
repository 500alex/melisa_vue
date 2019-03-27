const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = 5000;
const app = express();

//Set static path
// app.use(express.static(path.join(__dirname, 'client')));


app.use(bodyParser.json());

const payload = JSON.stringify({
    title: 'Новое сообщение!',

})
app.get('/screatenews',(req,res)=>{
    //res.set('content-type','application/json')
    res.set('Access-Control-Allow-Origin', 'http://127.0.0.1:5000');
    res.send({data: 'ivan'});
});


app.listen(port, ()=> console.log(`Server started on port ${port}`));