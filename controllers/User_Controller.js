const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const Users = require('../models/Users')

const { registerUserValidation , loginUserValidation } = require('../Validation')

//Function for User Registeration
const registerNewUser = async( req, res) => {
    const { error } = registerUserValidation(req.body)

    if( error ) {
        return res.status(400).send({message:error.details[0].message})
    }
    const userNameExists = await Users.findOne({ username : req.body.username })
    if( userNameExists ) {
        return res.status(400).send({message:"Username is already taken, please choose any other"})
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
        res.status(201).send({message:"User Registered Successfully!!!"})
    }
    catch(err) {
        res.status(400).send({message:error.details[0].message})
    }
}

//Function for User Login
const loginUser = async( req, res )=> {
    const { error } = loginUserValidation(req.body)

    if( error ) {
        return res.status(400).send({message:error.details[0].message})
    }

    const username = await Users.findOne({username : req.body.username})

    if( !username ) {
        return res.status(400).send({message:"Username is wrong"})
    }

    const hashedPassword = await bcrypt.compare(req.body.password , username.password)
    if(!hashedPassword){
        return res.status(400).send({message:"Invalid Password"})
    }
    const userRegistername = req.body.username
    const usersAuthenticate = { username : userRegistername}

    const accessToken = jwt.sign(usersAuthenticate, process.env.SECRET_KEY_TO_ACCESS, { expiresIn: '1200s' });
    res.cookie('jwt',accessToken)
    res.json({accessToken:accessToken}).status(200)
}

//Function to User Login GET API
const authenticateUser  =   async(req, res) => {
    let authenticatedUser = await Users.findOne({username: req.body.username})
    res.json(authenticatedUser).status(200)
}

//Function for authenticating via json web  token API
function authenticateToken( req, res , next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1]

    if( token == null ){
        return res.status(401).json({message:'Authentication failed!!! Token Required'})
    }

    jwt.verify(token, process.env.SECRET_KEY_TO_ACCESS, (err,user)=>{
        if( err ){
            return res.status(403).send({message:"Authentication Forbidden token Required please check again"})
        }
        req.user = user
        next()
    })

}

//Function for User LogoutAPI
const logoutUser = async(req,res) => {
    res.cookie('jwt','')
    res.status(200).send({message:"Logout Successfull!!!"})
}

module.exports = { registerNewUser , loginUser  ,authenticateToken,authenticateUser,logoutUser}