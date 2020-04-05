const express = require("express");
const app = express();
const paymentRoute = express.Router();
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

// Payment request
paymentRoute.route("/payment").post(async (req, res) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 12,
        currency: "cad",
        payment_method_types: ["card"],
        receipt_email: "jenny.rosen@example.com",
    });
    res.json(paymentIntent);
});

module.exports = paymentRoute;
