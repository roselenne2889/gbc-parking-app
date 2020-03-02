const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let CommentSchema = new Schema(
    {
        comment_text: {
            type: String
        }
    },
    {
        collection: "comment"
    }
);
const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
