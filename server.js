var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var validator = require('express-validator');
app.use(bodyParser.urlencoded({
  extended: false
}));
var cors=require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(validator());
app.use(require('./controller'));
port = process.env.PORT || 8081;


app.listen(port, function() {
  console.log("Sever Started %d",port);

})
