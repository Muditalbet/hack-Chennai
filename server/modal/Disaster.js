const mongoose = require('mongoose')

const disasterSchema = new mongoose.Schema({
    name:{
        type:String,
        required:'Please enter the disaster name',
        unique:'Disaster already exist'
    }
})

module.exports = mongoose.model("Disaster", disasterSchema)