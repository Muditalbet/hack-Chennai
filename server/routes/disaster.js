const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const { default: Disasters } = require('../../client/src/component/Disasters.js')
const Disaster = mongoose.model("Disaster")
const Management = mongoose.model("Management")

router.post('/disasters', async(req,res)=>{
    const {name, about} = req.body
    if(!name) return res.status(422).json({error:'Enter name of disaster'})
    await Disaster.findOne({
        name:{ $regex : new RegExp(name, "i") }
    }).then((existingDisaster)=>{
        if(existingDisaster) return res.status(422).json({error:'disaster already exist'})

        const newDisaster = new Disaster({
            name,
            about
        })
        newDisaster.save()
        .then((newDisaster)=>{
            res.json({message:'Added disaster'})
        }).catch(err=>console.log(err))
    }).catch(err=>console.log(err))
})
router.get('/allDisaster', (req,res)=>{
    Disaster.find()
    .then(List=>{
        res.json(List)
    }).catch(err=>console.log(err))
    console.log(Disasters);
})

module.exports = router