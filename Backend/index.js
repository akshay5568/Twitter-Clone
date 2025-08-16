const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/UserModel");

app.listen(8080, () => {
  console.log("Server is Running on Port");
});

app.get("/", (req, res) => {
  res.send("Hello, Twitter Clone");
});


const MONGO_URL = process.env.MONGO_URL;
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("connected to mongo"))
  .catch((e) => e);


const data = {
    name:"Aditya",
    email:"Adityajangid124@gmail.com",
    password:"121313"
}

