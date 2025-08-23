const express = require("express");
const Post = require("../models/PostModel");

const router = express.Router();

router.delete("/delete-post/:id", async (req, res) => {
  try {
    const id  = req.params.id;
    if (!id) res.status(401).send("Cannot get id");
    await Post.findByIdAndDelete(id);
    res.status(200).json({massage:"Post Deleted"});
  } catch (error) {
      res.status(500).send(`Something went wrong in server : ${error}`)
  }
});

module.exports = router;
