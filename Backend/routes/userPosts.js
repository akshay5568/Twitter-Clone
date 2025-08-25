const express = require("express");
const Post = require("../models/PostModel");
const upload = require("../utils/cloudnary");
const JWT = require("jsonwebtoken");
const User = require("../models/UserModel");

const router = express.Router();

//Making post route
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

//All user's posts for the home page.
router.get("/user-posts", async (req, res) => {
  try {
    const allPosts = await Post.find({});
    res.status(200).json(allPosts);
  } catch (error) {
    console.log("something went wrong");
    res.status(500).send("something went wrong while fatching data");
  }
});

//Indivisual post route
router.get("/user-post", async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) res.status(401).send("Could Not Able to Find the Post");
    const decode = JWT.decode(token, process.env.JWT_SECRET);
    const userPost = await Post.find({ userId: decode.id });
    res.status(200).json([userPost]);
  } catch (error) {
    res
      .status(500)
      .send("something went wrong while fatching post", error.massage);
  }
});

//Likes route
router.post("/post-like/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const token = req.headers.authorization.split(" ")[1];
    if (!token) res.status(401).send("something went wrong");
    const post = await Post.findById(postId);
    const decode = JWT.decode(token, process.env.JWT_SECRET);
    const userId = decode.id;

    if (post.likedBy.includes(userId)) {
      post.likes = Math.max(0, post.likes - 1);
      const userFound = post.likedBy.indexOf(userId);
      if (userFound !== -1) {
        post.likedBy.splice(userFound, 1);
      }
    } else {
      post.likes = post.likes + 1;
      post.likedBy.push(userId);
    }
    await post.save();

    res.status(200).json(post);
  } catch (error) {
    res
      .status(500)
      .send("Something went wrong while fatching post", error.massage);   
  }
});

//All user's fatching route
router.get("/all-users", async (req, res) => {
  try {
    const AllUsers = await User.find({});
    if (!AllUsers) res.status(401).send("Users Not Found");
    res.status(200).json(AllUsers);
  } catch (error) {
    res
      .status(500)
      .send("Something went wrong could'nt able fatch data right now", error);   
  }
});
module.exports = router;
