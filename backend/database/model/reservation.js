const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Lot = require("./lot");
const Spot = require("./spot");

let ReservationSchema = new Schema({
    reservation_number: {
        type: Number
    },
    lot: Lot,
    spot: Spot,
    start_time: {
        type: String
    },
    end_time: {
        type: String
    },
    license_plate_number: {
        type: String
    }
});

module.exports = ReservationSchema;
