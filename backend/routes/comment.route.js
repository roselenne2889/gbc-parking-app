const express = require("express");
const app = express();
const commentRoute = express.Router();

// user model
let Comment = require("../database/model/comments");
let User = require("../database/model/user");

// Add Comment
commentRoute.route("/submit-comment").post((req, res, next) => {
  User.findOne({ gbc_number: req.body.gbc_number }, (error, user) => {
    if (error) {
      return next(error);
    } else if (!user) {
      var err = new Error("User not found.");
      err.status = 401;
      return next(err);
    }
    user.comments.push({ comment: req.body.comment });
    user.save(saveError => {
      if (saveError) {
        return next(saveError);
      }
    });
  });
});

// TO DO: Maybe move to user.route and get all user data.
commentRoute.route("/").get((req, res) => {
  User.findOne({ gbc_number: req.body.gbc_number }, (error, user) => {
    if (error) {
      return next(error);
    } else if (!user) {
      var err = new Error("User not found.");
      err.status = 401;
      return next(err);
    }
    res.json(user.comments);
  });
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
