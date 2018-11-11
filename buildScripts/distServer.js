import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';
import favicon from 'serve-favicon';
import https from 'https';

/*eslint-disable no-console*/

const port = process.env.PORT || 4000;
const app = express();

app.use(compression());
app.use(express.static('dist'));
app.use(favicon(path.join(__dirname , '../src/assets/favicon.png')));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../dist/index.html'));
});
app.get('/dashboard',function(req,res){
    res.sendFile(path.join(__dirname,'../dist/index.html'));
});
app.get('/users',function(req,res){
    res.sendFile(path.join(__dirname,'../dist/index.html'));
});
app.get('/reports',function(req,res){
    res.sendFile(path.join(__dirname,'../dist/index.html'));
});
app.get('/account',function(req,res){
    res.sendFile(path.join(__dirname,'../dist/index.html'));
});

app.listen(port,function(err){
    if (err){
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});

//Hits the heroku server to keep app awake
setInterval(function() {
    https.get("https://progresshub.herokuapp.com");
    console.log('reload');
}, 600000); 
