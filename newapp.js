

const express = require("express");

const app = express();

app.use((req, res, next) =>{
    console.log("middleware");
    next();
});

app.use((req, res, next) =>{
    console.log('next middleware');
    res.send('<h1>hello ExpressJs</h1>');
});


app.listen(4000);
