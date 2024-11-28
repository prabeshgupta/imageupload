const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator')
const userModel = require('../models/user.model')
const bcrypt = require('bcrypt')

// Path is /user/test
router.get('/test', (req, res) => {
    res.send("User test route")
})

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', body('username').trim().isLength({ min: 3 }), body('email').trim().isEmail().isLength({ min: 15 }), body('password').trim().isLength({ min: 3 }), async (req, res) => {

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(400).json({
            errors: errors.array(),
            message: "Invalid Input"
        })
    }

    const { username, email, password } = req.body

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await userModel.create({
        username,
        email,
        password: hashedPassword
    })

    res.json(newUser)
})

module.exports = router