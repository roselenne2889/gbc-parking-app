const express = require("express");
const app = express();
const userRoute = express.Router();

// user model
let User = require("../database/model/user");

// Add User
userRoute.route("/user-signup").post((req, res, next) => {
  User.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get All Users
userRoute.route("/").get((req, res) => {
  User.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Get single user
userRoute.route("/read-user/:id").get((req, res) => {
  User.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

userRoute.route("/login").post((req, res, next) => {
  if (req.body.gbc_number && req.body.user_password) {
    User.authenticate(req.body.gbc_number, req.body.user_password, function(
      error,
      user
    ) {
      if (error || !user) {
        var err = new Error("Wrong GBC number or password.");
        err.status = 401;
        return next(err);
      } else {
        return res.json(user);
      }
    });
  }
});
module.exports = userRoute;
