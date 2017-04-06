var express =require("express");
var route = express.Router();

route.use("/signup",require("./signup"));
route.use("/login",require("./login"));
route.use("/getall",require("./getall"));
route.use("/welcome",require("./welcome"));
route.use("/logout",require("./logout"));

module.exports = route;
