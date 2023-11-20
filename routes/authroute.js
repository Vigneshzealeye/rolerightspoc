const route = require("express").Router();
const { login, getUser } = require("../controller/auth");
const {
  decodeJWTTokenMiddleware,
  authorization,
} = require("../middleware/authmiddleware");

route.post("/login", login);
route.get(
  "/getUser",
  decodeJWTTokenMiddleware,
  authorization("admin", "delete"),
  getUser
);

module.exports = route;
