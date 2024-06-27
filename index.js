// 1.import express(after installation)
var express = require('express');
require('./connection');
const user=require('./model/user');
// 2.initialization
var app = express();
// middleware(if u need to post smthng in get)
//giving permission to add
app.use(express.json());

// 3.api
// app.get('path',(request,response)=>{}) syntax
app.get('/',(req,res)=>{
    res.send("hello");
})
// to add data to db
// asyncavate always for api so that the value is fully generated before executing
app.post('/add',async(req,res)=>{
    try {
        console.log(req.body)
        await user(req.body).save()
        res.send({message:"data added!"})
    } catch (error) {
        console.log(error)
    }
})
    app.get('/login',(req,res)=>{
        res.send("u just logged in")
    })

//to view all the users
// user is the model
app.get('/view',async(req,res)=>{
    try {
        const data=await user.find()
        res.send(data)
    } catch (error) {
        console.log(error)
    }
})
// to delete an id
app.delete('/remove/:id',async(req,res)=>{
   try {
    await user.findByIdAndDelete(req.params.id);
    res.send({message:"deleted"})
   } catch (error) {
    console.log(error)
   } 
})

// update an user
app.put('/edit/:id',async(req,res)=>{
console.log("up")
try {
    var data= await user.findByIdAndUpdate(req.params.id,req.body);
    res.send({message:"updated",data})
} catch (error) {
    console.log(error)
}
})



// 4.port allocation
app.listen(3000,()=>{
console.log("port is running")
})