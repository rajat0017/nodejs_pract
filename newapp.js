
const express = require("express");

const app = express();

const admin = require('./routes/admin');

const shop = require('./routes/shop');

const bodyparser= require("body-parser");
app.use(bodyparser.urlencoded());

app.use('/admin',admin);

app.use(shop);

app.use((req, res , next)=>{
    res.status(404).send('<h1>Page not Found</h1>')
})

app.listen(3000);
