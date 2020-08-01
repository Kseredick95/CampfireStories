const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/campfirestories"
);

const achievementSeed = [
    {
        "image": "insert image search here",
        "title": "Started the journey",
        "id": "newUser"
    },
    {
        "image": "insert image search here",
        "title": "Began first quest",
        "id": "firstQuest"
    }
]

db.Achievement
    .remove({})
    .then(() => db.Achievement.collection.insertMany(achievementSeed))
    .then(data => {
        console.log(data.result.n + " records inserted into achievement database!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });