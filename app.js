const express = require('express')
const app = express()

//Dotenv
const dotenv = require('dotenv')
dotenv.config()

//Database
const connectDB = require('./config/db')
connectDB()

//User route
const userRouter = require('./routes/user.routes')

//Post Method
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Views
app.set('view engine', 'ejs')

//Routes
app.use('/user', userRouter)

//Server Port
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})