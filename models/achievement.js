const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const achievementSchema = new Schema({
    image: { type: String, required: true },
    title: { type: String, required: true },
    id: { type: String, required: true }   
});

const Achievement = mongoose.model("Achievement", achievementSchema);

module.exports = Achievement;