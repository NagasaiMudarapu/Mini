const express = require("express") ;
const app = express() ;
const mongoose = require('mongoose')
const bodyParser=require('body-parser')
const session=require('express-session')
const MongoStore=require('connect-mongo')(session);

//DB Connection
const dbConnect = require('./backend/DB/dbConnect')
dbConnect.connect((cb)=>{
    console.log(cb);
})



app.use(express.static(__dirname + '/frontend')) ;
app.use(bodyParser.json());
app.use(express.urlencoded({extended : false}))
app.use(bodyParser.urlencoded({ extended: false }));


app.use(session({
    secret:'work hard',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    })
}));


var port = process.env.PORT || 3000 ;
app.listen(port, function() {
    console.log("Site Running on http://localhost:" + port) ;
}) ;


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/frontend/html/welcome.html') ;
}) ;

app.get('/login', function(req, res) {
    res.sendFile(__dirname + '/frontend/html/login.html') ;
     
}) ;
app.post('/login', function(req, res){
    if(req.body.name === undefined)
    {
        console.log("Kaushik is Genius") ; 
        res.redirect('/home') ;   
    }
    else 
    {
        var user = {
            "name" : req.body.name, 
            "email" : req.body.email,
            "password" : req.body.password
        } ;
        var db = mongoose.connection ;
        db.collection("users").save(user) ;
        console.log("User Registered Successfully") ;
        res.redirect('/login') ;
    }
})

app.get('/home', function(req, res) {
    res.sendFile(__dirname + '/frontend/html/home.html') ;
}) ;

app.get('/courses', function(req, res){
    res.sendFile(__dirname + '/frontend/html/courses.html') ;
});
app.get('/discussions', function(req, res){
    res.sendFile(__dirname + '/frontend/html/discussions.html') ;
});
app.get('/assignment', function(req, res){
    res.sendFile(__dirname + '/frontend/html/assignment.html') ;
});
app.get('/CFcrawler', function(req, res){
    res.sendFile(__dirname + '/frontend/html/CFcrawler.html') ;
});
app.get('/profile', function(req, res){
    res.sendFile(__dirname + '/frontend/html/profile.html') ;
});

app.use((req, res, next) => {
    var err = new Error('File Not Found');
    err.status = 404;
    next(err);
});
  
  // error handler
  // define as the last app.use callback
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send(err.message);
});


const user = require('./backend/models/userSchema')


app.get('/register',(req,res)=>{
    console.log("shdvosdv");
    console.log(req.body.email);
    console.log(req.body.password);
    res.redirect('/home')
})