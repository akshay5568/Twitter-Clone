const express = require("express");
const Post = require("../models/PostModel");
const upload = require("../utils/cloudnary");
const JWT = require("jsonwebtoken");

const router = express.Router();

router.post("/user-posts", upload.single("file"), (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) res.status(401).json({ massage: "something went wrong" });
    const decode = JWT.decode(token, process.env.JWT_SECRET);
    const userId = decode.id;
    const content = req.body.textContent;
    const img = req.file ? req.file.path : null; // cloudnary url
    Post.create({ content, img, userId });
    res.status(200).json({ massage: "ok" });
  } catch (error) {
    console.error("Error while creating post:", error.message);
    res.status(500).json({
      message: "Something went wrong while saving the post",
      error: error.message,
    });
  }
});

router.get("/user-posts", async (req, res) => {
  try {
    const allPosts = await Post.find({});
    console.log(allPosts);
    res.status(200).json(allPosts);
  } catch (error) {
    console.log("something went wrong");
    res.status(500).send("something went wrong while fatching data");
  }
});

module.exports = router;
