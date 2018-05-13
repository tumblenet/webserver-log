const express = require('express');

var app = express();

//console.log("<script>window.setTimeout(function(){location.reload()},1000)</script>");
app.get('/', function (req,res,next) {
  res.sendFile(__dirname + '/log.html');
});

module.exports = app;
