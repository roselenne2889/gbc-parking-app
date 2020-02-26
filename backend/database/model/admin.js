const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let AdminSchema = new Schema(
  {
    admin_number: {
      type: Number
    },
    admin_password: {
      type: String
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
  Admin.findOne({ admin_number: adminNumber }).exec(function(err, admin) {
    if (err) {
      return callback(err);
    } else if (!admin) {
      var err = new Error("Admin not found.");
      err.status = 401;
      return callback(err);
    }
    if (adminPassword === admin.admin_password) {
      return callback(null, admin);
    } else {
      return callback();
    }
  });
};
const Admin = mongoose.model("Admin", AdminSchema);
module.exports = Admin;
