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
    }).then((existingDisaster)=>{
        if(!existingDisaster) return res.status(422).json({error:'disaster does not exist'})

        Management.findOne({disasterID:existingDisaster._id})
        .then(existingManagement=>{
            if(existingManagement) return res.status(422).json({error:'management of this disaster is already there.'})

            const newManagement = new Management({
                disasterID:existingDisaster._id,
                content
            })
            newManagement.save()
            .then(savedmanagement=>{
                res.json({message:"Management added sucessfully"})
            }).catch(err=>console.log(err))
        }).catch(err=>console.log(err))
    }).catch(err=>console.log(err))
})
router.get('/allManagement', (req,res)=>{
    Management.find()
    .then(List=>{
        res.send(List)
    }).catch(err=>console.log(err))
})

module.exports = router
