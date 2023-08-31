var express = require('express');
var app=express();

var PORT = process.env.PORT || 3000;

app.get('/',function(req,res){
    res.send("CHECK");
});
app.get('/resume',function(req,res){
    res.sendFile(__dirname+'/Resume.html');
});
app.get('/signin',function(req,res){
    res.sendFile(__dirname+'/SignIn.html');
});
app.get('/signup',function(req,res){
    res.sendFile(__dirname+'/SignUp.html');
});
app.get('/contact',function(req,res){
    res.sendFile(__dirname+'/Contact.html');
});

app.listen(PORT, function(){
    console.log("http://localhost:"+PORT);
});

//ctrl+c for terminating server.
