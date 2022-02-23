const fs = require("fs");

//Create folder
fs.mkdir("testFolder/Password",{recursive:true},err=>{
    console.log("Folder created!")
})

// //Create txt file and write data
fs.writeFile("testFolder/Password/pw.txt","enes123",err=>{
    console.log("File created and written!");
});

// //Veri Eklemek
fs.appendFile("testFolder/Password/pw.txt","\ncakir123","utf-8",err=>{
    console.log("New data added!");
});

// //Read file
fs.readFile("testFolder/Password/pw.txt","utf8",(err,data)=>{
    if(err)
        console.log(err);
    console.log(`Password =>{\n${data}\n}`);
});

//Delete file
setTimeout(() => {
    fs.unlink("/testFolder/Password/pw.txt",err=>{
        if(err)
            console.log(err);
        console.log("File deleted!");
    });
}, 2000);
