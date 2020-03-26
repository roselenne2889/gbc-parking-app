const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reservationHistorySchema = new Schema({
    date: {
        type: Date
    },
    reservation_number: {
        type: Number
    },
    amount: {
        type: Number
    }
});

module.exports = mongoose.model("ReservationHistory", reservationHistorySchema);
