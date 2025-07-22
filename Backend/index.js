const express = require("express");
const app = express();


app.listen( 8080 , () => {
    console.log("Server is Running on Port");
});


app.get('/' , (req,res) => {
    res.send("Hello, Twitter Clone");
});

