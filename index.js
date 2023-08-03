const express= require("express")
const app= express()
app.use(express.json())
require("dotenv").config()
const port= process.env.PORT

const cors = require("cors");
app.use(cors())

const {connection}= require("./configs/db")
const {userRouter}= require("./Routes/promptRouter")



app.use("/",userRouter)

app.listen(port,async(req,res)=>{
    try {
        await connection
        console.log("Database is connnected")
    } catch (error) {
        console.log("error")
    }
    console.log(`server is running at port ${port}`)
})