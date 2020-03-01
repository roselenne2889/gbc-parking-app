const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let CommentSchema = new Schema(
    {
        comment: {
            type: String
        }
    },
    {
        collection: "comment"
    }
);
const Comment = mongoose.model("Comment", CommentSchema);
module.exports = CommentSchema;
