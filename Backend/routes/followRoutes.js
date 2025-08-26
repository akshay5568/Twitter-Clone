const express = require("express");
const User = require("../models/UserModel");

const router = express.Router();

router.post("/user-followers/:followUserID", async (req, res) => {
  try {
    const followUserID = req.params.followUserID;
    if (!followUserID) res.status(401).send("something went wrong");
    const followingUserID = req.body.followingUserID;

    const followingUser = await User.findById(followingUserID);
    const userDetails = await User.findById(followUserID);
    if (!userDetails) res.status(401).send("something went wrong");
      if (userDetails.followers.includes(followingUserID)) {
        const index = userDetails.followers.indexOf(followingUserID);
        const followingIndex = followingUser.following.indexOf(followUserID);   
        if (index !== -1 || followingIndex !== -1) {
          userDetails.followers.splice(index, 1);
          followingUser.following.splice(followingIndex,1);
        }
     
      } else {
        userDetails.followers.push(followingUserID);
        followingUser.following.push(followUserID);
      }
   
    await userDetails.save();
    await followingUser.save();
    res.status(200).json({ massage: "Done" });
  } catch (error) {
    res.status(500).send("Something went wrong", error);
  }
});

module.exports = router;
