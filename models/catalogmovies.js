const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Añadir Schema aquí

const movieSchema = new Schema({
    title: {
        type: String,
        required: [true, "Movie needs a title"]
    },
    image: {
        type: String,
        required: [true, "Movie needs an image"]
    },
    summary: {
        type: String,
        required: [true, "Movie needs a summary"]
    },
    category: {
        type: String,
        required: [true, "Movie needs a category"]
    },
    id: {
        type: Number,
        required: [true, "Movie needs an id"]
    },
    updated: {
        type: Date,
        default: Date.now() 
    },
    rating: {
        type: Number,
    }

})

const Movie = mongoose.model("Movie", movieSchema)
module.exports = Movie;

