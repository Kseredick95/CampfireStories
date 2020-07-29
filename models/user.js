const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, bcrypt: true, rounds: 3 },
    deathcounts: { type: Number },
    achievements: [
        {
            achievements: [
                { name: { type: String } },
                { image: { type: String } },
                { date: { type: Date } },
                { id: { type: String } }
            ]
        }
    ],
    profileImage: { type: Image, required: false }
});

userSchema.plugin(require("mongoose-bcrypt"))

const User = mongoose.model("User", userSchema);

module.exports = User;