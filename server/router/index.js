const express = require("express");
const appRoute = express();
const UserController = require("../controller/UserController");
const middleware = require("../middleware/isLogin");

appRoute.post("/login", UserController.loginUser);
appRoute.get("/profile", middleware.verifyToken, UserController.getProfile);
appRoute.post("/user", UserController.createUser);
appRoute.get("/", (req, res) => {
  res.send("Hello World!");
});
module.exports = appRoute;
