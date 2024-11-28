const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: [3, "Username can't be less than 3 characters"]
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        minlength: [15, "Email can't be less than 15 characters"]
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: [3, "Password can't be less than 3 characters"]
    }
})

const user = mongoose.model('user', userSchema)
module.exports = user