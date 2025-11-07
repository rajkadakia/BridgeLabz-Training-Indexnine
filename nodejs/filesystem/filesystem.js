const fs = require("fs");
function date() {
    return new Date().toLocaleString();
}

//create/write file
// fs.writeFileSync("./sample.txt","HELLO WORLD ");//synchronous
// fs.writeFile("./sample1.txt","HELLO WORLD ASYNC",(err)=>{});//async

//read file
const r = fs.readFileSync("./sample.txt","utf-8");
console.log(r);//sync
fs.readFile("./sample1.txt","utf-8",(err,result)=>{
    if(err){
        console.log("ERROR",err);
    }
    else{
        console.log(result);
    }
});//async

//append add to file
// fs.appendFileSync("./sample.txt",`${date()} hey there\n`);//sync
// fs.appendFile("./sample1.txt",`${date()} Hello there\n`,(err)=>{});//async

//copy file
fs.copyFileSync("./sample.txt","./copy.txt");//sync
fs.copyFile("./sample1.txt","./copy1.txt",(err)=>{});//async
fs.copyFileSync("./sample.txt","./tbd.txt");

//delete file
//fs.unlinkSync("./tbd.txt");//sync
fs.unlink("./tbd.txt",(err)=>{});
