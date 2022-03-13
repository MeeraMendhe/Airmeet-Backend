const express=require("express")
const MovieModel = require("../Models/Movie.model")
const router=express.Router()

router.get("/",async(req,res)=>{
    try{
       
        const movies=await MovieModel.find().lean().exec()
        return res.status(200).send(movies)

    }catch(e){
        
        return res.status(400).send("Bad Request",e)
    }
})

module.exports=router