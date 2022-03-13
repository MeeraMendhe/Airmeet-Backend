const app=require("./index")
const connect=require("./Config/db")

const port =process.env.PORT||1234
app.listen(port,async function(){
    await connect()
    console.log("Listening to port 1234")
})