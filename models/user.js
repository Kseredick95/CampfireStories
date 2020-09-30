const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    created: { type: Date },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    username: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    deathCount: { type: Number, required: true },
    profileImage: { type: String, required: false },
    achievements: [{
        type: { type: String },
            name: { type: String },
            description: { type: String },
            date: { type: Date }
    }],
    lastBook: {},
    completedBooks: [{
        title: { type: String }
    }]
});

userSchema.methods.comparePassword = function(password, callback) {
    return callback(null, bcrypt.compareSync(password, this.password));
};

const User = mongoose.model("User", userSchema);


module.exports = User;