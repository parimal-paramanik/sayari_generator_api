const mongoose= require("mongoose")

const userSchema= mongoose.Schema({
    role:{type:String,required:true},
    content:{type:String,required:true}
})
const userModel= mongoose.model("user",userSchema)

module.exports= {userModel}