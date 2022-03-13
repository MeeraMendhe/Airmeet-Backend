const express=require("express")
const MovieModel = require("../Models/Movie.model")
const router=express.Router()

router.get("/",async(req,res)=>{
    console.log(req.query)
    const page=+req.query._page||1;
    const limit=+req.query._limit||6;
    const offset=(page-1)*limit
    try{
       
        const movies=await MovieModel.find().skip(offset).limit(limit).lean().exec()
        return res.status(200).send(movies)

    }catch(e){
        
        return res.status(400).send("Bad Request",e)
    }
})

module.exports=router