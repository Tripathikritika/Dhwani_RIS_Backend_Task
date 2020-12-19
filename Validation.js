const Joi = require('joi')

//Validate the user before Registration
const registerUserValidation = ( data ) => {
    const schema = Joi.object({
        username :  Joi.string().min(3).required(),
        origanization : Joi.string().min(5).required(),
        designation : Joi.string().min(5).required(),
        password : Joi.string().min(8).required()
    })
    return schema.validate(data)
}

//Validate the user before Login
const loginUserValidation = ( data ) => {
    const schema = Joi.object({
        username : Joi.string().min(3).required(),
        password : Joi.string().required()
    })
    return schema.validate(data)
}

module.exports = { registerUserValidation , loginUserValidation }