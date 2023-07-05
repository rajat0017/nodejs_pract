const express = require('express');

const routes= express.Router();

routes.get('/add-product',(req, res, next) =>{
    
    res.send('<form action="/admin/add-product" method="POST" ><input type="text" name="product"><br><br><input type="text" name="size"><br><br>  <button>Add Product</button></form>');
});

routes.post('/add-product',(req, res, next)=>{
    console.log(req.body);
    res.redirect('/');
})

module.exports= routes;