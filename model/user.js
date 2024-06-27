const mongoose=require('mongoose')
// const Schema variable name and the oher part schema should be caps
const schema=mongoose.Schema({
    Name:String,
    Age:Number,
    Place:String,
    Phone:Number
})
// user made based on schema
const userModel=mongoose.model("user",schema);
module.exports=userModel