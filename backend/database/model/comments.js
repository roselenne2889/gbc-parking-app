const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let comments = new Schema(
  {
    comment: {
      type: String
    }
  },
  {
    collection: "comments"
  }
);
module.exports = mongoose.model("comments", comments);
