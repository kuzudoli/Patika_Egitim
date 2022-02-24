const fs = require("fs");

//Creating
fs.writeFile("employee.json",'{"name":"Enes","salary":2000}',"utf-8",(err)=>{
    if(err)
        console.log(err);
    else
        console.log("Created and written!");
})

//Reading
fs.readFile("employee.json","utf-8",(err,data)=>{
    if(err)
        console.log(err);
    else
        console.log(data);
});

//Updating
fs.writeFile("employee.json",'{"name":"Ebru","salary":4000}',"utf-8",(err)=>{
    if(err)
        console.log(err);
    else
        console.log("Updated!");
})