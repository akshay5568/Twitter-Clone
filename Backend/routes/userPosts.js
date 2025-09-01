const express = require("express");
const Post = require("../models/PostModel");
// const upload = require("../utils/cloudnary");
const JWT = require("jsonwebtoken");
const User = require("../models/UserModel");
const fileUpload = require("express-fileupload");
// const cloudinary = require("../utils/cloudinary");
const imagekit = require("../utils/ImageKit");
const fs = require("fs");

const router = express.Router();
router.use(
  fileUpload({
    useTempFiles: true,
  })
);

//Making post route
router.post("/user-posts", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized" });
    const decode = JWT.decode(token, process.env.JWT_SECRET);

    const userId = decode.id;
    const content = req.body.textContent;
    const img =req.files.image ;

    let imgURL = null;
    let mediaTYPE = null
    if (img) {
      const fileBase64 = fs.readFileSync(img.tempFilePath).toString("base64");
      const result = await imagekit.upload({
        file: fileBase64,
        fileName: `post-image-${userId}`,
        folder: "Twitter-Clone",
        useUniqueFileName: true,
      });

      imgURL = result.url;
      mediaTYPE = result.fileType;
      console.log(mediaTYPE);
    }

    const newPost = new Post({
      content,
      img: imgURL,
      mediaType:mediaTYPE,
      userId:userId,
    });
    await newPost.save();

    res.status(201).json({ message: "Post created successfully" });
  } catch (error) {
    console.error("Error while creating post:", error);
    res.status(500).json({ error: error.message });
  }
});

//All user's posts for the home page.
router.get("/user-posts", async (req, res) => {
  try {
    const allPosts = await Post.find({}).populate("userId");
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

//Upload profile img. route
router.post("/profile-image/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const img = req.files ? req.files.image : null;
    const fileBase64 = fs.readFileSync(img.tempFilePath).toString("base64");
    
    const result = await imagekit.upload({
      file:fileBase64,
      fileName:`profile-image-${userId}`,
      folder:'Profile-images-twitter-clone',
      useUniqueFileName: true,
    })
    let image = result.url;
    const updatedUserData = await User.findByIdAndUpdate(
      userId,
      { profileImg: image },
      { new: true }
    );
    res.status(200).json(updatedUserData);
  } catch (error) {
    res.status(500).send("Something Went Wrong in the server", error);
  }
});

module.exports = router;
