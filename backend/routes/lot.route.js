const express = require("express");
const lotRoute = express.Router();

let Lot = require("../database/model/lot");

// Get all lots
lotRoute.route("/").get((req, res) => {
  Lot.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});
