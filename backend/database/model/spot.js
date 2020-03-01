const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Lot = require("./lot");

const SpotSchema = Schema({
    lot: Lot,
    spot_name: {
        type: String
    }
});

module.exports = SpotSchema;