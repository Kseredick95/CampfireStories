//Requirements
const express = require("express");
const session = require("express-session");
const compression = require("compression");
const mongoose = require("mongoose");
const routes = require("./routes");

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

app.use(
    session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })
);

//Database connection
mongoose.connect(
    process.env.MONGOLAB_RED_URI || "mongodb://localhost/campfirestories", { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

//Routes
app.use(routes)


app.listen(PORT, function() {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
});