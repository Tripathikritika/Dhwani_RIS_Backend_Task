const State = require('../models/State')

const getStateNames = ( req, res ) => {
    State
    .find()
    .then((state) => res.status(200).json(state))
    .catch((err) => res.status(400).json(err))
}

const postStateNames = ( req, res ) => {
    console.log(req.body.stateName)
    const addNewState = new State({
        stateName : req.body.stateName
    })

    addNewState
    .save()
    .then(() => res.json("State Added Successfully!!"))
    .catch((err) => res.status(400).json(err))

}

module.exports = { getStateNames , postStateNames }