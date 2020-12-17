const mongoose = require('mongoose')

const Schema = mongoose.Schema

const districtSchema = new Schema({
    stateName : {
        type : String,
        required : true,
        trim : true
    },
    districtName : {
        type : String,
        required : true,
        trim : true
    }
}, {
    versionKey: false
})

module.exports = mongoose.model("DistrictDetails" , districtSchema)