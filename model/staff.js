const mongoose = require('mongoose')

const staffData = new mongoose.Schema({
    fullname:{
        type: String,
        required:true
    },
    username:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    department:{
        type: String,
        required:true
    },
    position:{
        type: String,
        required:true
    },
})

module.exports = mongoose.model("staff", staffData)