const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let LotSchema = new Schema({
    lot_name: {
        type: String
    }
});

module.exports = LotSchema;