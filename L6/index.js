const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/', (function(req, res){
    res.render("index");

}))

app.get('/profile/harsh', function(req, res){
    console.log("Profile Page of Harsh");
    res.send("This is Harsh's Profile Page");
})


app.get('/name/:username', function(req, res){
    const username = req.params.username;
    res.send("Hi " + username + ", welcome to your profile page!");
})

app.get('author/:username/:age' , function(req, res){
    const username = req.params.username;
    const age = req.params.age;
    res.send(" Hi" + username + ", you are " + age + " years old.");
    console.log("author page accessed");
} )




app.listen(3000, function(){
    console.log("Server is running on port 3000");
})