let express = require("express"),
    path = require("path"),
    mongoose = require("mongoose"),
    cors = require("cors"),
    bodyParser = require("body-parser"),
    dbConfig = require("./database/db");

// Connecting with mongo db
mongoose.Promise = global.Promise;
mongoose
    .connect(dbConfig.db, {
        useNewUrlParser: true,
    })
    .then(
        () => {
            console.log("Database sucessfully connected");
        },
        (error) => {
            console.log("Database could be not connected: " + error);
        }
    );
mongoose.set("useFindAndModify", false);
// Setting up port with express js
const userRoute = require("../backend/routes/user.route");
const commentRoute = require("../backend/routes/comment.route");
const adminRoute = require("../backend/routes/admin.route");
const lotRoute = require("../backend/routes/lot.route");
const paymentRoute = require("../backend/routes/payment.route");
const app = express();
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);
app.use(cors());
app.use(express.static(path.join(__dirname, "dist/gbc-parking-app")));
app.use("/", express.static(path.join(__dirname, "dist/gbc-parking-app")));
app.use("/api", userRoute);
app.use("/api/comment", commentRoute);
app.use("/api/admin", adminRoute);
app.use("/api/lot", lotRoute);
app.use("/api/payment", paymentRoute);

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log("Connected to port " + port);
});

// Find 404 and hand over to error handler
app.use((req, res, next) => {
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
    console.error(err.message); // Log error message in our server's console
    if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
    res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});
