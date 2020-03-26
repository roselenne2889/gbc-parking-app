const express = require("express");
const app = express();
const userRoute = express.Router();

// user model
const User = require("../database/model/user");
const ReservationHistory = require("../database/model/reservation-history");

// Add User
userRoute.route("/user-signup").post((req, res, next) => {
    User.create(req.body, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

// Get All Users
userRoute.route("/").get((req, res, next) => {
    User.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            res.json(data);
        }
    });
});

// Get all comments
userRoute.route("/all-comments").get((req, res, next) => {
    User.find((error, data) => {
        if (error) {
            return next(error);
        } else {
            const populateOptions = {
                path: "comments"
            };
            User.populate(data, populateOptions, (err, docs) => {
                if (err) {
                    return next(err);
                }
                const userComments = [];
                docs.forEach(user => {
                    user.get("comments").forEach(comment => {
                        userComments.push({
                            name: `${user.get("first_name")} ${user.get(
                                "last_name"
                            )}`,
                            email: `${user.get("email")}`,
                            comment: `${comment.comment_text}`
                        });
                    });
                });
                res.json(userComments);
            });
        }
    });
});

// Get single user
userRoute.route("/read-user").post((req, res, next) => {
    User.findOne({ gbc_number: req.body.gbc_number }, (error, data) => {
        if (error) {
            return next(error);
        }
        res.json(data);
    });
});

// User login
userRoute.route("/login").post((req, res, next) => {
    if (req.body.gbc_number && req.body.user_password) {
        User.authenticate(req.body.gbc_number, req.body.user_password, function(
            error,
            user
        ) {
            if (error || !user) {
                var err = new Error("Wrong GBC number or password.");
                err.status = 401;
                return next(err);
            } else {
                return res.json(user);
            }
        });
    }
});

// User logout

// Create reservation (update?)
userRoute.route("/create-reservation").post((req, res, next) => {
    User.findOne({ gbc_number: req.body.gbc_number }, (err, user) => {
        if (err) {
            return next(err);
        } else if (!user) {
            var error = new Error("User not found.");
            error.status = 401;
            return next(error);
        }
        user.updateOne(
            { reservation: req.body.reservation },
            (err, updateRes) => {
                if (err) {
                    return next(err);
                }
                // res.json(updateRes);
                // Add to payment history
                ReservationHistory.create(
                    {
                        date: req.body.reservation.start_time,
                        reservation_number:
                            req.body.reservation.reservation_number,
                        amount: req.body.reservation.amount
                    },
                    (error, savedReservation) => {
                        if (error) {
                            return next(error);
                        }
                        user.reservation_history.push(savedReservation._id);
                        user.save((saveError, updatedUser) => {
                            if (saveError) {
                                return next(saveError);
                            } else {
                                res.json(updatedUser);
                            }
                        });
                    }
                );
            }
        );
    });
});

// Delete reservation
userRoute.route("/delete-reservation").post((req, res, next) => {
    User.findOne({ gbc_number: req.body.gbc_number }, (err, user) => {
        if (err) {
            return next(err);
        } else if (!user) {
            var error = new Error("User not found.");
            error.status = 401;
            return next(error);
        }
        // user.reservation.remove();
        user.reservation = undefined;
        user.save((err, saveRes) => {
            if (err) {
                return next(err);
            }
            res.json(saveRes);
        });
    });
});

// Get payment history for user
userRoute.route("/reservation-history").post((req, res, next) => {
    User.findOne({ gbc_number: req.body.gbc_number }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            const populateOptions = {
                path: "reservation_history"
            };
            User.populate(data, populateOptions, (err, docs) => {
                if (err) {
                    return next(err);
                }
                res.json(docs);
            });
        }
    });
});

module.exports = userRoute;
