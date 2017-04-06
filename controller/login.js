var express = require('express');
var app = express();
var route = express.Router();
var firebase = require("../config")

var root = firebase.database().ref();


route.post('/', function(request, response) {
  //console.log('re ', request.body);

  //console.log(sess);
  var email = request.body.email;
  var password = request.body.password;
  // var detail={email:email,password:password};
  // sess=detail;



   //sess.password1=password;
  if (email == "" || email == undefined || email == null) {
    response.send({
      "status": false,
      "message": "Please Enter Email id"
    });
    return;
  } else if (password == "" || password == undefined || password == null) {
    response.send({
      "status": false,
      "message": "Please Enter Password"
    });
    return;
  }

  root.on("value", function(snapshot) {
    //data = snapshot.key;
    //  UserEmail = data.email;
    //  password = data.password;
    //console.log(data);

    root.orderByChild("email").equalTo(request.body.email).once("value", function(snapshot) {
      //console.log(snapshot);
      snapshot.forEach(function(data) {
        //console.log(data.val());
        Userinfo = data.val();
        Useremail = Userinfo.email;
        Userpassword = Userinfo.password;
        //console.log(Userinfo.email);
      //  console.log(Userinfo.password);

        if (email === Useremail && password === Userpassword) {
              // var detail=request.body;
              //console.log(sess);
              // response.cookie("name",detail);
              request.session=Userinfo;
              console.log(request.session);
          response.send({
            "status": true,
            "message": "Login Successfully"
          });
        } else {
          response.send({
            "status": false,
            "message": "Unauthorised User"
          })
        }

      });
    });

  }, function(error) {
    console.log("Error: " + error.code);
  });
  //});
});
module.exports = route;
