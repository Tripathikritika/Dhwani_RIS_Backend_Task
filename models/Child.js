const mongoose = require('mongoose')

const Schema = mongoose.Schema

const childSchema = new Schema ({
    name : {
        type : String,
        trim : true,
        required : true
    },
    sex:{
        type : String,
        trim : true,
        required : true
    },
    dateOfBirth:{
        type : Date,
        trim : true,
        required:true
    },
    fathersName : {
        type : String,
        trim : true,
        required : true
    },
    mothersName : {
        type : String,
        trim : true,
        required : true
    },
    stateName : {
        type : String,
        trim : true,
        required : true
    },
    districtName : {
        type : String,
        trim : true,
        required : true
    }
},{
    versionKey : false
})

module.exports = mongoose.model("childDetails", childSchema)