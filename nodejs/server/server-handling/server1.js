const http = require("http");
const fs = require("fs")
const path = require("path");

const server = http.createServer((req,res)=>{
    let filepath = path.join(__dirname,"public",req.url==="/"?"index.html":req.url);
    const ext = path.extname(filepath);

    let contenttype = "text/html";
    if(ext===".css") contenttype = "text/css";
    else if(ext===".js") contenttype = "text/javascript";

    fs.readFile(filepath,"utf-8",(err,content)=>{
        if(err){
            res.writeHead(404,{"Content-Type":"text/plain"});
            res.end("eror 404 not found");
        }
        else{
            res.writeHead(200,{"Content-type":contenttype});
            res.end(content);
        }

    });
});

server.listen(8001,()=>console.log("server started at port 8001")); 