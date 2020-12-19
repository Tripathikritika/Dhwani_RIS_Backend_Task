const District = require('../models/District')

//Function for District GET API
const getDistrictName = (req, res) => {
    District.find()
    .then((district) => res.status(200).json({district}))
    .catch((err) => res.status(400).json({message:err.message}))
}

//Function for District POST API
const postDistrictName = (req,res) => {
    const addNewDistrict = new District({
        stateName : req.body.stateName,
        districtName : req.body.districtName
    })

    addNewDistrict.save()
    .then(() => res.status(201).json({message:"State along with District is added Successfully!!!"}))
    .catch((err) => res.status(400).json(err))
}

module.exports = { getDistrictName , postDistrictName }