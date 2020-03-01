const express = require("express");
const lotRoute = express.Router();
const mongoose = require("mongoose");

const LotSchema = require("../database/model/lot");
const SpotSchema = require("../database/model/spot");
const User = require("../database/model/user");

const Lot = mongoose.Model("Lot", LotSchema);
const Spot = mongoose.Model("Spot", SpotSchema);

// Get all lots
lotRoute.route("/").get((req, res, next) => {
    Lot.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

// Get all spots within a lot
lotRoute.route("/get-spots").post((req, res, next) => {
    Spot.find({ "lot.lot_name": req.body.lot_name }, (err, spots) => {
        if (err) {
            return next(error);
        } else {
            res.json(spots);
        }
    });
});

// Get unavailable spots within a lot
lotRoute.route("/get-taken").post((req, res, next) => {
    const takenSpots = [];
    const takenCursor = User.find({
        "reservation.lot.lot_name": req.body.lot_name
    }).cursor();
    takenCursor.next((cursorError, userDoc) => {
        takenSpots.push(userDoc.reservation.spot.spot_name);
    });
    res.json(takenSpots);
});
