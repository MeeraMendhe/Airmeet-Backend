const express=require("express")
const cors=require("cors")
const movieController=require("./Controllers/Movie.controller")
const app=express()
app.use(express.json())

app.use(cors())
app.use("/data",movieController)
module.exports=app