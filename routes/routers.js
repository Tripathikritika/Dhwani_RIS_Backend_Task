const express = require('express')
const router = express.Router()

const { registerNewUser , loginUser } = require('../controllers/User_Controller')
const User = require ( '../models/Users')

router.post('/userRegistration',registerNewUser)
router.post('/userLogin',loginUser)

module.exports = router