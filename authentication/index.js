const express = require('express')
const bcrypt = require('bcrypt')
const app = express();

app.get("/",(req,res)=>{
    res.cookie("name","raj")
    res.send("hello world")
     
})
app.get("/read",(req,res)=>{
    bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("password", salt, (err, hash)=> {

    });
    });
})
app.listen(3000,()=>{
    console.log("server is running")
})