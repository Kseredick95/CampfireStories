//Requirements
const express = require("express");
const session = require("express-session");
const compression = require("compression");
const mongoose = require("mongoose");
const routes = require("./routes");
var passport = require("./config/passport");

//Express set-up
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Compressions
app.use(compression());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//Passport- verifications
app.use(
    session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })
);

app.use(passport.initialize());
app.use(passport.session())

//Database connection
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/campfirestories", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

//Routes
app.use(routes)


app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});