const http = require("http");
const fs = require ("fs");

const myserver = http.createServer((req,res)=>{

    if(req.url === "/"){
        res.writeHead(200,{"Content-type":"text/html"});
        res.end("<h1>This server says hello</h1>")
    }
    else if(req.url === "/about"){
        res.writeHead(200,{"Content-type":"text/html"});
        res.end("<p>THis is the about page i am learning to create a nodejs sever</p>")
    }
    else{
        res.writeHead(200,{"Content-type":"text/plain"});
        res.end("ha chal chal 4040");
    }
});
myserver.listen(8002,()=>console.log("server is running"));