const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, bcrypt: true, rounds: 3 },
  achievements: [
    { achievementName: { type: String } },
    { image: { type: String } },
    { id: { type: String } },
  ],
  profileImage: { type: String, required: false },
});

userSchema.plugin(require("mongoose-bcrypt"));

const User = mongoose.model("User", userSchema);

module.exports = User;
