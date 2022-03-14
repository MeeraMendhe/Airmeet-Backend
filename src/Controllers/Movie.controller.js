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
router.patch("/",async(req,res)=>{
    try{
       
        const movies=await MovieModel.update({$set:{"flag":false}})
        return res.status(200).send(movies)

    }catch(e){
        
        return res.status(400).send("Bad Request",e)
    }
})
router.patch("/:id",async(req,res)=>{
    let data=await MovieModel.findById(req.params.id)
    let flag=data.flag  
    if(flag==true)
    {
        try{
            const movies=await MovieModel.findByIdAndUpdate(req.params.id,{$set:{flag:false}},{new:true})
            return res.status(200).send(movies)
    
        }catch(e){
            
            return res.status(400).send("Bad Request",e)
        }
    }
    else
    {
        try{
            const movies=await MovieModel.findByIdAndUpdate(req.params.id,{$set:{flag:true}},{new:true})
            return res.status(200).send(movies)
    
        }catch(e){
            
            return res.status(400).send("Bad Request",e)
        }
    }
   
})
router.get("/:name",async(req,res)=>{
    let getName=req.params.name
    let num=true
    try{
       
        const movies=await MovieModel.find().lean().exec()
       let newMovie= movies.filter(e=>{
           num=true
           for(let i=0;i<getName.length;i++)
           {
              if(e.title[i]!=getName[i])
              {
                num=false;
                break
              }
              console.log(e.title[i],getName[i])
           
           }
           return num?true:false
       })
          console.log(newMovie)
        return res.status(200).send(newMovie)

    }catch(e){
        
        return res.status(400).send("Bad Request",e)
    }
})
router.get("/filter/:type",async(req,res)=>{
  
    let filter=req.params.type
    //console.log(filter)
    const page=+req.query._page||1;
    const limit=+req.query._limit||9;
    const offset=(page-1)*limit
    try{
       
        const movies=await MovieModel.find({type:{$eq:filter}}).skip(offset).limit(limit).lean().exec()
        return res.status(200).send(movies)

    }catch(e){
        
        return res.status(400).send("Bad Request",e)
    }
})

module.exports=router