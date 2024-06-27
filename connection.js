// 1. import mongoose
const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://AmyReni:amyrenivarghese@cluster0.vviph2k.mongodb.net/OpenBatchdb1?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to db")
})
.catch((error)=>{
    console.log("error")
})