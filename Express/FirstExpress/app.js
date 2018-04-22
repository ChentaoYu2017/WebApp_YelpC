var express = require("express");
var app = express();

app.get('/',function(req,res){
    res.send('Hi there!');
});

app.get('/bye',function(req,res){
    res.send('Bye!');
});

app.get("/r/:subredditName",function(req,res){
    var subreddit = req.params.subredditName;
    res.send("welcome to " + subreddit.toUpperCase() + "subreddit");
});

app.get("/r/:subredditName/comments/:id/:title/",function(req, res) {
    console.log(req.params);
    res.send("welcome to comments page");
});

// sent error message
app.get("*",function(req,res){
    res.send("You are a star!")
})
app.listen(process.env.PORT,process.env.IP,function(){
    console.log('Server is started!');
});

// '/' => 'Hi'
// '/bye' => 'Goodbye'