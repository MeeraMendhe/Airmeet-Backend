const mongoose=require("mongoose")

const MovieSchema=mongoose.Schema({
    title: {
        type: String,
        require:true
    },
    posterURL: {
        type: String,
        require:true
    },
    imdbId:  {
        type: String,
        require:true
    }
},
{
    versionKey: false,
    timestamps: true,
})
module.exports=mongoose.model("Movie",MovieSchema)