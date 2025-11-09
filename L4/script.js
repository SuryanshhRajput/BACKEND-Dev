const express = require('express');
const app = express();

// app.get('/', function(req, res){
//     res.send("Suryansh is writing his fist express code ");
// })

// app.get('/about', function(req, res){
//     res.send("This is the about page of Suryansh's express server");
   

app.use(function(req, res, next){
    console.log('creating a middleware');
    next();

})

app.get('/', function(req, res){
    res.send("This is the homepage after the middleware");
})



app.listen(3000, function(){
    console.log("Server is running on port 3000");

})