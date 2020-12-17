const express = require('express')
const router = express.Router()

const { registerNewUser , loginUser } = require('../controllers/User_Controller')
const { getStateNames ,postStateNames } = require('../controllers/State_Controller')

router.post('/userRegistration',registerNewUser)
router.post('/userLogin',loginUser)

router.get('/statename',getStateNames)
router.post('/statename',postStateNames)

module.exports = router