const Child = require('../models/Child')

const getChildInformation = (req , res )=>{
    Child.find()
    .then((child) =>res.status(200).json(child) )
    .catch((err) => res.status(400).json(err))
}

const postChildInformation = ( req, res )=>{
    const addNewChild = new Child({
        name : req.body.name,
        sex : req.body.sex,
        dateOfBirth : req.body.dateOfBirth,
        fathersName : req.body.fathersName,
        mothersName : req.body.mothersName,
        stateName : req.body.stateName,
        districtName : req.body.districtName
    })
    addNewChild.save()
    .then(() => res.json("Child Details is Added Successfully!!"))
    .catch((err) => res.status(400).json(err))
}

module.exports = { getChildInformation , postChildInformation }