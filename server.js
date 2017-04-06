var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var validator = require('express-validator');
// var RedisStore = require('connect-redis')(express);
// var session = require('cookie-session');
// var cookieParser = require('cookie-parser')
//var RedisStore = require('connect-redis')(session);
// app.use(cookieParser());
//app.use(cookieParser());
var cookieSession = require('cookie-session')
app.use(cookieSession({
  //  secret: 'ssshhhhh',
  name: 'logged_in_user',
  keys: ['key1'],
  maxAge: 24 * 60 * 60 * 1000,
  // saveUninitialized: false,
  //     resave: true
  // Cookie Options
  //maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

// app.use(session({
//
//     name: 'Username',
//     key: ['key1', 'key2'],
//     maxAge: 24 * 60 * 60 * 1000,
//     saveUninitialized: true,
//     resave: true
// //
// //     cookie: {
// //       httpOnly: false,
// //       secure: false
// //     }
//   }
//   // {
//   //   store: new RedisStore }
// ));
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.static("./public"));
//app.use(express.static(path.join(__dirname, '/public')));
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());
app.use(validator());

app.use(require('./controller'));
port = process.env.PORT || 8081;

app.listen(port, function() {
  console.log("Sever Started %d", port);

})
