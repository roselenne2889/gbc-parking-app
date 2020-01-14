const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let lateFees = new Schema(
  {
    date: {
      type: Date
    },
    amountOwed: {
      type: Number
    }
  },
  {
    collection: "lateFees"
  }
);
module.exports = mongoose.model("lateFees", lateFees);
