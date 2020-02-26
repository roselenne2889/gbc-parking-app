const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let ReservationSchema = new Schema({
  reservation_number: {
    type: Number
  },
  lot: {
    type: String
  },
  spot_number: {
    type: Number
  },
  time: {
    type: Date
  },
  license_plate_number: {
    type: String
  },
  user_id: {
    type: String
  }
});

module.exports = mongoose.model("Reservation", ReservationSchema);
