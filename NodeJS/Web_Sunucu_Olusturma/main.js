const http = require("http");

const server = http.createServer((req,res)=>{
    const url = req.url;
    
    if(url === "/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h2>Index</h2>')
    }
        
    else if(url === "/about"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h2>About</h2>")
    }

    else if(url === "/contact"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<h2>Contact</h2>")
    }

    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write("<h2>Not found!</h2>");
    }

    res.end();
    console.log("İstek gönderildi.");
});

const port = 3000;

server.listen(port,()=>{
    console.log(`Sunucu ${port} portunda başlatıldı.`);
});

