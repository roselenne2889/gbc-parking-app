const express = require("express");
const app = express();
const adminRoute = express.Router();

// Admin model
const Admin = require("../database/model/admin");

// Admin login
adminRoute.route("/login").post((req, res, next) => {
  if (req.body.admin_number && req.body.admin_password) {
    Admin.authenticate(
      req.body.admin_number,
      req.body.admin_password,
      (error, admin) => {
        if (error || !admin) {
          console.log(error);
          var err = new Error("Wrong Admin number or password.");
          err.status = 401;
          return next(err);
        } else {
          return res.json(admin);
        }
      }
    );
  }
});

module.exports = adminRoute;
