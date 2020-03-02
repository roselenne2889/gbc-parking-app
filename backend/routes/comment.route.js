const express = require("express");
const app = express();
const commentRoute = express.Router();

let Comment = require("../database/model/comments");
let User = require("../database/model/user");

// Add Comment
commentRoute.route("/submit-comment").post((req, res, next) => {
    Comment.create(req.body, (error, savedComment) => {
        if (error) {
            return next(error);
        }
        User.findOne({ gbc_number: req.body.gbc_number }, (error, user) => {
            if (error) {
                return next(error);
            } else if (!user) {
                var err = new Error("User not found.");
                err.status = 401;
                return next(err);
            }
            user.comments.push(savedComment._id);
            user.save((saveError, updatedUser) => {
                if (saveError) {
                    return next(saveError);
                } else {
                    res.json(updatedUser);
                }
            });
        });
    });
});

// Get all comments made by every user
commentRoute.route("/").get((req, res) => {
    const userComment = {};
    const commentCursor = User.find()
        .$where("this.comments.length > 0")
        .cursor();
    commentCursor.next((cursorError, userDoc) => {
        userComment[userDoc.get("gbc_number")] = userDoc.get("comments");
    });
    res.json(userComment);
});

module.exports = commentRoute;
