//jshint esversion:6

const express = require("express");
const app = express();
app.get("/", function(req, res){
    res.send("<h1>Hello</h1>");
});
app.get("/contact", function(req, res){
    res.send("Contact me at: thackerevan@gmail.com");
});
app.get("/about", function(req, res){
    res.send("My name is Evan Thacker.");
});
app.get("/hobbies", function(req, res){
    res.send("My Hobbies Include: Coding, Music, Movies, Art, and Comedy.")
})

app.listen(3000, function(){
    console.log("server started on port 3000.");
});