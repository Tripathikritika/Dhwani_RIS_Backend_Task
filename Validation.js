const Joi = require('joi')
const { schema } = require('./models/Users')

const registerUserValidation = ( data ) => {
    const schema = Joi.object({
        username :  Joi.string().min(3).required(),
        origanization : Joi.string().min(5).required(),
        designation : Joi.string().min(5).required(),
        password : Joi.string().min(8).required()
    })
    return schema.validate(data)
}

const loginUserValidation = ( data ) => {
    const schema = Joi.object({
        username : Joi.string().min(3).required().email(),
        password : Joi.string().min(8).required()
    })
    return schema.validate(data)
}

module.exports = { registerUserValidation , loginUserValidation }