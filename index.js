const express = require('express')
const app = express()

app.use(express.json());
//app.get('string',cbfn);
//app.post('string',cbfn);

//middleware function
//app.get('string',mcbfn1,cbfn); // mcbfn = middleware calbackfunction

app.post('/',function(req,res,next){
    console.log('Hello from middleware function 1');
    next();
} ,function(req,res,next){
    console.log('Hello from middlware function 2');
    req.body.name = 'Dilip';
    next();
} ,function(req,res,next){
    req.body.name ="Ruchi";
    next();
}, function (req, res) {
    let n = req.body.name;
  res.send(`Hello ${n} How are you`)
});

let port= 3000; 
app.listen(port,function(){
    console.log(`The server is running on port ${port} `);
})