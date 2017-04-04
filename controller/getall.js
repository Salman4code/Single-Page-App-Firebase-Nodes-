var express = require('express');
var app = express();
var route = express.Router();
var firebase=require("../config")

var root = firebase.database().ref();
var arr=[];
var st="";
var i=0;
route.use('/',function(request,response){

  root.on("value",function(snapshot){

    snapshot.forEach(function(data){
      // data.forEach(function(abc)
      // {
      //   var d=abc.val();
      //   st=st+d+" ";
      //   //response.send(d)
      // })
      // arr[i++]=st;
      // //console.log(arr[i++]);
      //  st="";
      arr.push(data.val());
    })
    // var j=JSON.stringify(arr);
     response.send(arr);
  })
})
module.exports = route;
