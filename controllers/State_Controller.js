const State = require('../models/State')

//Function for State GET API
const getStateNames = ( req, res ) => {
    State
    .find()
    .then((state) => res.status(200).json({state}))
    .catch((err) => res.status(400).send({message:err.message}))
}

//Function for State POST API
const postStateNames = ( req, res ) => {
    const addNewState = new State({
        stateName : req.body.stateName
    })
    addNewState
    .save()
    .then(() => res.status(201).json({message:"State Added Successfully!!"}))
    .catch((err) => res.status(400).send({message:err.message}))

}

module.exports = { getStateNames , postStateNames }