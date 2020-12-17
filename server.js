const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const User = require('./models/Users')
const route = require('./routes/routers')
const app = express()

dotenv.config()

app.use(cors())

app.use(express.json())

mongoose.connect(
    process.env.ATLAS_URI, { useNewUrlParser : true , useUnifiedTopology : true , useCreateIndex : true }, (err) =>{
        if( err ){
            console.log("Connection to database Failed!!!")
        }
        else{
            console.log("Connection to database is Successfull!!!")
        }
    }
)

app.use('/' ,route)
app.listen( 8000 , () => {
    console.log("Server is up and running successfully at port 8000")
})