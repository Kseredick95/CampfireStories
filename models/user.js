const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: false },
    email:{ type: String, required: true, unique: true },
    password:{ type: String, required: true, bcrypt: true, rounds: 3 },
    deathCount: { type: Number, required: true },
    profileImage: { type: String, required: false },
    achievements: [{
        name: { type: String },
        date: { type: Date }
    }]
});

userSchema.plugin(require("mongoose-bcrypt"))

const User = mongoose.model("User", userSchema);

module.exports = User;