const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const stateSchema = new Schema ({
    stateName : {
        type : String,
        required : true,
        trim : true
    }
},{
    versionKey : false
})

module.exports = mongoose.model( "stateDetails" , stateSchema )