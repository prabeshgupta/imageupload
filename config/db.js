const mongoose = require('mongoose')

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("Connected to DB")
    }).catch(() => {
        console.log("Failed to connect DB")
    })
}

module.exports = connectDB