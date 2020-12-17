const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username : {
        type : String,
        required : true,
        trim : true
    },
    origanization : {
        type : String,
        trim : true
    },
    designation : {
        type : String,
        trim : true
    },
    password : {
        type : String,
        required : true,
        trim : true
    }
},{
    versionKey: false
})

module.exports = mongoose.model("UserDetails" , userSchema)