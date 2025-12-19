const express = require('express')
const app = express()
const fs = require('fs')
const port = 8000;
let users = require('./MOCK_DATA.json');

app.use(express.urlencoded({ extended:false }));

app.get('/api/users',(req,res)=>{
    return res.json(users);
})

app.get('/users',(req,res)=>{
    const html =`
    <ul>
    ${users.map((user)=>`<li>${(user.first_name)}</li>`).join("")}
    </ul>
    `;
    res.send(html);
})

app.route('/api/users/:id')
.get((req,res)=>{
    const id = Number(req.params.id);
    const user = users.find((user)=>user.id===id);
    return res.json(user);
})
.patch((req,res)=>{
    const id = Number(req.params.id);
    const index = users.findIndex(user=>user.id===id);
    const body = req.body;

    if(index < 0){
        return res.status(404).json({error : "user not found"})
    }
    users[index]={...users[index],...body};
     fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), err => {
        if (err) {
            return res.status(500).json({ error: "Failed to update user" });
        }
        res.json(users[index]);
    });
})
.delete((req,res)=>{
    const id = Number(req.params.id);

    const index = users.findIndex(user => user.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "User not found" });
    }

    const deletedUser = users[index];
    users = users.filter(user => user.id !== id);

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users, null, 2), err => {
        if (err) {
            return res.status(500).json({ error: "Failed to delete user" });
        }
        res.json({ status: "deleted", user: deletedUser });
    });

})
app.post('/api/users',(req,res)=>{
    const body = req.body;
    console.log(body);
    users.push({...body,id:users.length+1});
    fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
         return res.json({status:"sucess",id:users.length});
    })
   
})
app.listen(port,()=>{
    console.log("server started at port 8000")
})