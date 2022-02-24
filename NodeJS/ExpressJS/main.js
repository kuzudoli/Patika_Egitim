const express = require("express");

const app = express();

app.get('/',(req,res)=>{
    res.status(200).send("Index");
})

app.get('/contact',(req,res)=>{
    res.status(200).send("Contact");
})

app.get('/about',(req,res)=>{
    res.status(200).send("About");
})

app.get('*',(req,res)=>{
    res.status(404).send("Not Found!");
})

app.listen(3000);

console.log("Listening on 3000...");