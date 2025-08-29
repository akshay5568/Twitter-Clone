const express = require("express");
const bookmarks = require("../models/BookmarkModel");
const router = express.Router();

router.get("/allbookmarks", async (req, res) => {
  try {
    const allBookmarks = await bookmarks.find().populate("postId");
    if (!allBookmarks) res.status(401).send("could'nt able to fatch data");   
    res.status(200).json(allBookmarks);
  } catch (error) {
    res.status(500).send("Something went wrong in the server");   
  }
});

router.post("/add-bookmark/:id", async (req, res) => {
  try {
    const postId = req.params.id;
    const userId = req.body.UserId;
    await bookmarks.create({ userId, postId });
  } catch (error) {
    res.status(500).send("Something went wrong in server");
  }
});


router.delete('/delete-bookmark/:id' , async (req,res) => {
    try {
        const bookmarkID = req.params.id;
        if(!bookmarkID) res.status(401).send("ID cannot recevied");   
        await bookmarks.findByIdAndDelete(bookmarkID);
        res.status(200).send("Bookmark post Deleted");
    }
    catch (error) {
        res.status(500).send("Something went wrong");
    }
})

module.exports = router;
