const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Añadir Schema aquí

const movieSchema = new Schema({
    name: {
        type: String,
        required: [true, "Movie needs a name"]
    },
    image: {
        type: String,
        required: [true, "Movie needs an image"]
    },
    summary: {
        type: String,
        required: [true, "Movie needs a summary"]
    },
    genre: {
        type: String,
        required: [true, "Movie needs a genre"]
    },
    updated: {
        type: Date,
        default: Date.now() 
    },
    rating: {
        type: Number,
        unique: true
    }

})

const Movie = mongoose.model("Movie", movieSchema)
module.exports = Movie;

