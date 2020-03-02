const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let lateFeesSchema = new Schema({
    date: {
        type: Date
    },
    amountOwed: {
        type: Number
    },
    reservation_number: {
        type: Number
    }
});
module.exports = mongoose.model("LateFees", lateFeesSchema);
