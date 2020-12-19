const Child = require('../models/Child')

//Function for Child GET API
const getChildInformation = (req , res )=>{
    Child.find()
    .then((child) =>res.status(200).json({child}) )
    .catch((err) => res.status(400).json({message:err.message}))
}

//Function for Child POST API
const postChildInformation = ( req, res )=>{
    let dob = req.body.dateOfBirth
    const addNewChild = new Child({
        name : req.body.name,
        sex : req.body.sex,
        dateOfBirth : dob.toLocaleString(),
        fathersName : req.body.fathersName,
        mothersName : req.body.mothersName,
        stateName : req.body.stateName,
        districtName : req.body.districtName
    })
    addNewChild.save()
    .then(() => res.status(201).json("Child Details is Added Successfully!!"))
    .catch((err) => res.status(400).json({message:err.message}))
}

module.exports = { getChildInformation , postChildInformation }