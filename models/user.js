const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email:{ type: String, required: true, unique: true },
    password:{ type: String, required: true },
    achievements:[
        { achievementName: { type: String }},
        { image: { type: String }},
        { id: { type:String }}
    ],
    profileImage: { type: String, required: false }
});

const User = mongoose.model("User", userSchema);

module.exports = User;