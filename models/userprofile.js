const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Añadir Schema aquí

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "User needs a name"]
    },
    email: {
        type: String,
        required: [true],
        match: [/^\S+@\S+\.\S+$/, 'Not a valid email format.'],
        unique: true
    }
})


const User = mongoose.model("User", userSchema)
module.exports = User;