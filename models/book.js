const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    image: { type: String, required: true },
    text: { type: String, required: true },
    choices: [{ text: { type: String } },
        { id: { type: String } }
    ]
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;