const express = require('express')
const router = express.Router()

const { registerNewUser , loginUser } = require('../controllers/User_Controller')
const { getStateNames ,postStateNames } = require('../controllers/State_Controller')
const { getDistrictName ,postDistrictName } = require('../controllers/DIstrict_Controller')
const { getChildInformation , postChildInformation } = require('../controllers/Child_Controller')

router.post('/userRegistration',registerNewUser)
router.post('/userLogin',loginUser)

router.get('/statename',getStateNames)
router.post('/statename',postStateNames)

router.get('/districtname',getDistrictName)
router.post('/districtname',postDistrictName)

router.get('/childinfo',getChildInformation)
router.post('/childinfo',postChildInformation)

module.exports = router