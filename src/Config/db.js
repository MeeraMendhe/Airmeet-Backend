const mongoose=require("mongoose")

const connect=()=>
{
   return mongoose.connect("mongodb+srv://MeeraMendhe:kingangel@cluster0.4maw9.mongodb.net/movie")
}

module.exports=connect