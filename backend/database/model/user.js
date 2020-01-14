const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//defining the collection and schema
let User = new Schema(
  {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    gbcNumber: {
      type: Number
    },
    email: {
      type: String
    },
    userPassword: {
      type: String
    }
  },
  {
    collection: "users"
  }
);

module.exports = mongoose.model("User", User);
