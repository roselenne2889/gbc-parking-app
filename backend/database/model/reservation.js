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
        type: Date
    },
    end_time: {
        type: Date
    },
    license_plate_number: {
        type: String
    },
    amount: {
        type: Number
    }
});

module.exports = ReservationSchema;
