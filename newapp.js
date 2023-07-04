

const express = require("express");

const app = express();

const bodyparser= require("body-parser");
app.use(bodyparser.urlencoded());

app.use('/add-product',(req, res, next) =>{
    
    res.send('<form action="/product" method="POST" ><input type="text" name="product"><br><br><input type="text" name="size"><br><br>  <button>Add Product</button></form>');
});

app.post('/product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req, res, next) =>{
    
    res.send('<h1>redirected to home</h1>');
});

app.listen(3000);
