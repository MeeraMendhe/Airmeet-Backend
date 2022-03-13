const mongoose=require("mongoose")

const MovieSchema=mongoose.Schema({
    title: {
        type: String,
        required:true
    },
    posterURL: {
        type: String,
        required:false
    },
    imdbId:  {
        type: String,
        required:true
    },
    type:{ 
        type: String,
        required:false
    }
},
{
    versionKey: false,
    timestamps: true,
})
module.exports=mongoose.model("Movie",MovieSchema)