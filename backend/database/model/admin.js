const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let AdminSchema = new Schema(
  {
    adminNumber: {
      type: Number
    },
    adminPassword: {
      type: string
    }
  },
  {
    collection: "admin"
  }
);

AdminSchema.statics.authenticate = function(
  adminNumber,
  adminPassword,
  callback
) {
  Admin.findOne({ adminNumber: adminNumber }).exec(function(err, anum) {
    if (err) {
      return callback(err);
    } else if (!anum) {
      var err = new Error("User not found.");
      err.status = 401;
      return callback(err);
    }
    if (adminPassword === anum.adminNumber) {
      return callback(null, anum);
    } else {
      return callback();
    }
  });
};
const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;
