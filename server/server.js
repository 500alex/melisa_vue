var express = require('express');
var app = express();

app.post('/screatenews', function (req, res) {
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Server started on port: 3000!');
});