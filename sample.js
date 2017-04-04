var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var firebase = require("firebase");
var validator = require('express-validator');
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(validator());

port = 8081;
var config = {
  apiKey: "AIzaSyCIqDrMjXYjtZj8aMYcC5C4qXI18LOkaeM",
  authDomain: "myfirstdatabase-489ed.firebaseapp.com",
  databaseURL: "https://myfirstdatabase-489ed.firebaseio.com",
  projectId: "myfirstdatabase-489ed",
  storageBucket: "myfirstdatabase-489ed.appspot.com",
  messagingSenderId: "94068879185"
};



firebase.initializeApp(config);
var root = firebase.database().ref();
// app.post('/login', function(request, response) {
//   //console.log('re ', request.body);
//   try {
//     root.on("value", function(snapshot) {
//       data = snapshot.val();
//       name = data.name;
//       password = data.password;
//      snapshot.forEach(function(obj)
//     {
//      //  var ch=obj.key;
//       obj.forEach(function(abc){
//         console.log(abc.val());
//         name=abc.val();
//         if(request.body.name === name)
//         {
//           status = true;
//         }
//         else if (request.body.password ===name) {
//            status = false;
//         }
//       });
//     })
//
//       if (request.body.name === name && request.body.password === password) {
//
//         response.send({
//           "status": true,
//           "message": "Login Successfully"
//         });
//       } else {
//         response.send({
//           "status": false,
//           "message": "Unauthorised User"
//         })
//       }
//
//     }, function(error) {
//       console.log("Error: " + error.code);
//     });
//
//
//   } catch (e) {
//     response.send(e);
//   }
// })

app.post('/signup', function(request, response) {

  console.log(request.body.name);
  Username = request.body.name;
  UserEmail = request.body.email;
  UserPassword = request.body.password;
  console.log(Username);
  if (Username == "" || Username == null || Username == undefined) {
    response.send({
      "status": false,
      "message": "Please Enter name"
    });
    return;
  } else if (UserEmail == "" || UserEmail == null || UserEmail == undefined) {
    response.send({
      "status": false,
      "message": "Please Enter Email_id"
    });
    return;
  } else if (UserPassword == "" || UserPassword == null || UserPassword == undefined) {
    response.send({
      "status": false,
      "message": "Please Enter password"
    });
    return;
  }
  var reg = /^[789]\d{9}$/;
  //  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
  //  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  request.checkBody("email", "Enter valid email address.").isEmail();
  request.checkBody("password", "Password must be of 8 digit & password must contain atleast one capital letter,one small letter and one special character").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
  request.checkBody("mobile", "Mobile number is not valid").matches(/^[789]\d{9}$/);
  var errors = request.validationErrors();
  if (errors) {
    response.send(errors);
    return;
  }

  root.child("user5").push().set({
    name: request.body.name,
    email: request.body.email,
    password: request.body.password,
    mobile: request.body.mobile
  })

  response.send({
    "status": true,
    "message": "Signup Successfully"
  })

})
app.listen(port, function() {
  console.log("Sever Started");

})
