const express = require('express');
const app = express();

const userModel = require('./usermodel');

app.get('/', (req, res)=>{
    res.send("Hello World");
})

app.get('/create', async (req, res)=> {
    let createduser = await userModel.create({
        name: "Suryansh",
        email: "suryanh123@gmail.co",
        username: "suryansh234"

    })
   
    res.send(createduser);

})

app.get('/update', async (req, res)=>{
    let updateduser = await userModel.findOneAndUpdate({username:"suryansh234"}, {name:"ram"}, {new:true})

    res.send(updateduser);
})


app.get('/read', async (req, res)=>{
    let users = await userModel.findOne({username:"suryansh234"});

    res.send(users);
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
});
