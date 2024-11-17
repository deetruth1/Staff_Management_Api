const express = require('express')
const mongoose = require('mongoose')

const app = express()


app.use(express.json())

mongoose.connect('mongodb://localhost:27017')
const con = mongoose.connection
 if (con.on) {
    try {
        console.log('Databae connected successfully');
        
    } catch (error) {
        console.log(error);
        
    }
    
 }

 const staffRouter = require('./router/staff')
 app.use('/staff', staffRouter)

 const port = 3000
 app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);
    
 })