var express = require('express');
var app = express();



app.post('/'), (req, resp) => resp.send("Hello World")


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });