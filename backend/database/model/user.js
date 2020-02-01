const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and schema
let UserSchema = new Schema(
  {
    first_name: {
      type: String
    },
    last_name: {
      type: String
    },
    gbc_number: {
      type: Number
    },
    email: {
      type: String
    },
    user_password: {
      type: String
    }
  },
  {
    collection: "user"
  }
);

UserSchema.statics.authenticate = function(
  gbc_number,
  user_password,
  callback
) {
  User.findOne({ gbc_number: gbc_number }).exec(function(err, user) {
    if (err) {
      return callback(err);
    } else if (!user) {
      var err = new Error("User not found.");
      err.status = 401;
      return callback(err);
    }
    if (user_password === user.user_password) {
      return callback(null, user);
    } else {
      return callback();
    }
  });
};
const User = mongoose.model("User", UserSchema);
module.exports = User;
