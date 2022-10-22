const mongoose = require ('mongoose')
const book = require('../controllers/books_controller')
const { Schema } = mongoose

const bookSchema = new Schema({
    title: {type: String},
    description: {type: String},
    year: Number,
    quantity: Number,
    imageURL: String,
})

const Book = mongoose.model('Book', bookSchema)
module.exports = Book