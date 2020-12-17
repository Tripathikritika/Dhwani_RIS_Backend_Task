const bcrypt = require('bcryptjs')
const jwt = require
const Users = require('../models/Users')
const { registerUserValidation , loginUserValidation } = require('../Validation')

const registerNewUser = async( req, res) => {
    const { error } = registerUserValidation(req.body)
    if( error ) {
        return res.status(400).send(error.details[0].message)
    }
    const userNameExists = await Users.findOne({ username : req.body.username })
    if( userNameExists ) {
        return res.status(400).send("Username is already taken, please choose any other")
    }

    const hashedPassword = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
    )

    const userRegistrationDetails = new Users({
        username : req.body.username,
        origanization : req.body.origanization,
        designation : req.body.designation,
        password : hashedPassword,
        
    })

    try {
        await userRegistrationDetails.save()
        res.send("Registration Successful!")
    }
    catch(err) {
        res.status(400).send(err)
    }
}

const loginUser = async( req, res )=> {
    const { error } = loginUserValidation(req.body)
    if( error ) {
        return res.status(400).send(error.details[0].message)
    }
    
    const username = await Users.findOne({username : req.body.username})

    if( !username ) {
        return res.status(400).send("Username is wrong")
    }

    const validatePassword = await bcrypt.compare(req.body.password , username.password)
    if(!validatePassword){
        return res.status(400).send("Invalid Password")
    }
    const userLoginDetails = new Users({
        username : req.body.username,
        password : hashedPassword
    })

    try {
        await userLoginDetails.save()
        res.send("Logged In Successful!")
    }
    catch(err) {
        res.status(400).send(err)
    }
}

module.exports = { registerNewUser , loginUser }