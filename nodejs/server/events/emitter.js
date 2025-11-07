const http = require("http");
const fs = require("fs");
const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("log",(message)=>{
    const timestamp = new Date().toLocaleString();
    fs.appendFile("./log.txt",`${timestamp} - ${message}\n`,(err)=>{});
});

const myserver = http.createServer((req,res)=>{
    emitter.emit(`log`,`message received at ${req.url}`);

      if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home Page</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<p>About Page</p>");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

myserver.listen(8003,()=>console.log("serveris running"));