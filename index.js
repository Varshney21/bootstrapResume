const express = require('express');
var path = require('path');
var fs = require('fs');

var app = express();

app.engine('html', require('ejs').renderFile);

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/bindex.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(3000);