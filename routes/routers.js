const express = require('express')
const router = express.Router()
const Users = require('../models/Users')

const { registerNewUser , loginUser,authenticateToken,authenticateUser,logoutUser } = require('../controllers/User_Controller')
const { getStateNames ,postStateNames } = require('../controllers/State_Controller')
const { getDistrictName ,postDistrictName } = require('../controllers/DIstrict_Controller')
const { getChildInformation , postChildInformation } = require('../controllers/Child_Controller')

//API Route for User Login 
router.post('/userRegistration',registerNewUser)
router.post('/userLogin',loginUser)
router.get('/user',authenticateToken,authenticateUser)

//API Route for User Logout
router.post('/userLogout',logoutUser)

//API for GET State 
router.get('/statename',getStateNames)

//API for POST State
router.post('/statename',postStateNames)

//API for GET District 
router.get('/districtname',getDistrictName)

//API for POST District 
router.post('/districtname',postDistrictName)

//API for GET Child 
router.get('/childinfo',getChildInformation)

//API for POST District 
router.post('/childinfo',postChildInformation)

module.exports = router