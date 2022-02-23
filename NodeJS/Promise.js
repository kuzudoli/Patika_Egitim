const promise1 = new Promise((resolve,reject)=>{
    resolve("Veriler Alındı!");
    reject("Bağlantı Hatası!");
});

promise1.then(value=>{
    console.log(value);
}).catch(err=>{
    console.log(err);
});


const fs = require('fs');
         
fs.readFile('/file.md', (err, data) => {
 console.log(data);
});
morework();