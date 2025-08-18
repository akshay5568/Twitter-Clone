const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

//Middilwares
app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/auth");

app.use("/api/auth", authRoutes);

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

