const mongoose = require('mongoose')

const managementSchema = new mongoose.Schema({
    disasterID:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'Disaster',
        required:'Enter Disaster _id'
    },
    disasterName:{
        type:String,
        required:'Enter disaster name'
    },
    content:{
        type:String,
        require:'Enter its management ways'
    }
})

module.exports = mongoose.model("Management", managementSchema)