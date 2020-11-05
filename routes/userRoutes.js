const express = require('express')
const router = express.Router()
// controller
const userController = require('../controllers/userController')

// routes for /api/users
router.post('/signup', userController.userSignup)
router.post('/login', userController.userLogin)

module.exports = router