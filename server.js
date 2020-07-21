//Requirements
const express = require("express");
const session = require("express-session");
const compression = require("compression");
const mongoose = require("mongoose");

//CHANGE TO CONFIGURED PASSPORT FILE
const passport = require("passport");

//UNCOMMENT WHEN MODELS MADE
//const db = require("./models")

//UCOMMENT WHEN ROUTES MADE -- add /filename
//const routes = require("./routes");

//Express set-up
const app = express();
const PORT = process.env.PORT || 3000;

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
process.env.MONGODB_URI || "mongodb://localhost/campfirestories",
{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

//UNCOMMENT WHEN ROUTES MADE
//app.use("/api, routes")


//Sets homepage to index.html
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });


app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
  