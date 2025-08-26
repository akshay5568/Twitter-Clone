const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//Middilwares
app.use(cors());
app.use(express.json());



//For Routers
const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const userPost = require('./routes/userPosts');
app.use('/api', userPost);

const deletePost = require('./routes/deletePost');   
app.use('/api', deletePost);

const followRoute = require('./routes/followRoutes');
app.use('/api' , followRoute);




app.listen(8080, () => {
  console.log("Server is Running on Port");
});

//For Database
const MONGO_URL = process.env.MONGO_URL;
mongoose
  .connect(MONGO_URL)
  .then(() => console.log("connected to mongo"))
  .catch((e) => console.log(e));

//Routes
app.get("/", (req, res) => {
  res.send("Hello, Twitter Clone");       
});

