var express = require('express');
var app = express();
var route = express.Router();

var firebase=require("../config")
var root = firebase.database().ref();

route.post('/', function(request, response) {

  //console.log(request.body.name);
  Username = request.body.name;
  UserEmail = request.body.email;
  UserPassword = request.body.password;
  confirmpassword=request.body.confirmpassword;
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
  if(UserPassword!=confirmpassword)
  {
    response.send({"status":false,"message":"Password does not matched"});
    return;
  }
  var reg = /^[789]\d{9}$/;
  //  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
  //  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
  request.checkBody('email', "Enter valid email address.").isEmail();
  request.checkBody("password", "Password must be of 8 digit & password must contain atleast one capital letter,one small letter and one special character").matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);
  request.checkBody("mobile", "Mobile number is not valid").matches(reg);
  var errors = request.validationErrors();
  if (errors) {
    console.log(errors);
    error.forEach(function(data)
    {
      console.log(data);
    });
    response.send(errors);
    return;
  }
  root.orderByChild("email").equalTo(UserEmail).once("value", function(snapshot) {
    if (snapshot.val() === null) {

      root.push().set({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
        mobile: request.body.mobile
      });
      request.session={"email":UserEmail};
      console.log(request.session);
      response.send({
        "status": true,
        "message": "Signup Successfully"
      });

    } else {
      response.send({"status":false,"message":"Email_Id already Exist"});
    }
  })
})
module.exports = route;
