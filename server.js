const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const route = require('./routes/routers')

const app = express()

dotenv.config()

app.use(cors())

//middleware 
app.use(express.json())
app.use(cookieParser())

//database connection
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

//routes
app.use('/' ,route)

//Listen at Post 8000 for server running up
app.listen( 8000 , () => {
    console.log("Server is up and running successfully at port 8000")
})