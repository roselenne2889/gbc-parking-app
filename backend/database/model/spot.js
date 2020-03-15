const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpotSchema = Schema({
    spot_name: {
        type: String
    }
});

module.exports = SpotSchema;
