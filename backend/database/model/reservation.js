const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Reservation = new Schema(
  {
    reservationNumber: {
      type: Number
    },
    lot: {
      type: String
    },
    slotNumber: {
      type: Number
    },
    time: {
      type: Date
    },
    licensePlateNum: {
      type: string
    },
    gbc
  },
  {
    collection: "reservations"
  }
);

module.exports = mongoose.model("Reservation", Reservation);
