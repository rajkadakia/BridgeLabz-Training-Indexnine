const http = require("http");
const fs = require("fs");
const path = require("path");
const html = fs.readFileSync("./index.html","utf-8");
const myserver = http.createServer((req,res)=>{
    const log =`${new Date().toLocaleString()} : ${req.url} new req received \n`
    fs.appendFile("./log.txt",log,(err,data)=>{});
    switch(req.url){
        case "/":res.end("This is my first Server");  
        break;
        case "/about":
              fs.readFile(path.join(__dirname,"index.html"),(err,data)=>{
                if(err){
                    res.writeHead(500,{"Conten-Type":"text/plain"});
                    res.end("error loading page")
                }
                else{
                    res.writeHead(200,{"Content-Type":"text/html"})
                    res.end(data);
                }
                
            });
        break;
        case "/contact":res.end("Contact us at xyz@gmail.com");
        break;
        case "/final":res.end(html);
        break;
        default : res.end("404 NOT FOUND");
    }

});

myserver.listen(8000,()=>console.log("server started"));