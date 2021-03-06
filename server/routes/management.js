const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Disaster = mongoose.model("Disaster")
const Management = mongoose.model("Management")

router.post('/management', async(req,res)=>{
    const { disasterName, content } = req.body
    if( !disasterName || !content ) return res.status(422).json({error:'Field is missing'})
    await Disaster.findOne({
        name:{ $regex : new RegExp(disasterName, "i") }
    })
    .then((existingDisaster)=>{
        if(!existingDisaster) return res.status(422).json({error:'disaster does not exist'})

        const newManagement = new Management({
            disasterID:existingDisaster._id,
            disasterName:existingDisaster.name,
            content
        })
        newManagement.save()
        .then(savedManagement=>{
            res.json({message:'management added'})
        }).catch(err=>console.log(err))
    }).catch(err=>console.log(err))
})
router.get('/showManagement', (req,res)=>{
    Management.find({disasterID:req.query.id})
    .then(List=>{
        if(!List) res.send('bad query')
        else{
            res.json(List)
        }
    }).catch(err=>console.log(err))
})
module.exports = router
