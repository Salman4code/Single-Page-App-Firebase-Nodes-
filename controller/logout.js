var express = require('express');
// var app = express();
var route = express.Router();
//var session		=	require('express-session');
route.get('/',function(request,response)
{
  //console.log(response);
  //  response.clearCookie('Username');

  // console.log(x);

  // response.clearCookie('key1', { path: '/' });
  // response.clearCookie('key1,key2', { path: '/' });
  //request.session.destroy();
 request.session=null;
 console.log(request.session);
  response.send({"status":false,"message":"logged out"});
  // request.session.destroy(function(err) {
  //   if(err)
  //   {
  //     console.log(err);
  //   }
//   //cannot access session here
// });
//request.session.reset()
//console.log(request.session);
  //request.session=null;
//  response.send({"status":false});
  // console.log(request.session);
// console.log(request.session);
// response.end();
});
module.exports = route;
