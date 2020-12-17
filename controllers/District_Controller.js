const District = require('../models/District')

const getDistrictName = (req, res) => {
    
    District.find()
    .then((district) => {
        console.log(district)
        res.status(200).json(district)
    })
    .catch((err) => res.status(400).json(err))
}

const postDistrictName = (req,res) => {
    const addNewDistrict = new District({
        stateName : req.body.stateName,
        districtName : req.body.districtName
    })

    addNewDistrict.save()
    .then(() => res.json("State and District Added SuccessFully"))
    .catch((err) => res.status(400).json(err))
}

module.exports = { getDistrictName , postDistrictName }