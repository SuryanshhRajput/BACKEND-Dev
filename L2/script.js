const fs = require('fs');

const http = require('http');


// fs.writeFile("hey.txt", "hello ji kaise ho aap", function(err){
//     if(err) console.log(err);
//     else console.log("File written successfully");
// })

// fs.appendFile("hey.txt", "\n I'm using fs.appendFile now ", function(err) {
//     if(err) console.log(err);
//     else console.log("File appended successfully");

// })


// fs.rename("hey.txt", "hi.txt", function(err){
//     if(err) console.log(err);
//     else console.log("File renamed successfully");
// })



// fs.copyFile("hi.txt", "./copy/copy_of_hi.txt", function(err){
//     if(err) console.log(err);
//     else console.log("File copied successfully");
// })




// fs.unlink("hi copy.txt", function(err){
//     if(err) console.log(err);
//     else console.log("File deleted successfully");
// })



// --------- http module ------------ //

const server = http.createServer(function(req, res){
    res.end("hello from Suryansh's server");
})
server.listen(3000);

console.log("Server listening on port 3000");