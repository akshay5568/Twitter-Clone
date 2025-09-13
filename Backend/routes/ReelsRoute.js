const express = require("express");
const JWT = require("jsonwebtoken");
const Reels = require("../models/ReelsModel");
const fileUpload = require("express-fileupload");
const imagekit = require("../utils/ImageKit");
const fs = require("fs");

const router = express.Router();

router.use(
  fileUpload({
    useTempFiles: true,
  })
);

router.post("/reels", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).send("Invalid token");
    const DecodeToken = JWT.verify(token, process.env.JWT_SECRET);
    const ID = DecodeToken.id;

    const reels = req.files?.reel;

    let reelsURL = null;
    let mediaTYPE = null;
    if (reels && reels.data) {
      const fileBase64 = fs.readFileSync(reels.tempFilePath).toString("base64");
      const result = await imagekit.upload({
        file: fileBase64,
        fileName: `Reel-${ID}`,
        folder: "REELS",
        useUniqueFileName: true,
      });
      reelsURL = result.url;
      mediaTYPE = result.fileType;
    }
    const newReel = new Reels({
      reelUrl: reelsURL,
      mediType: mediaTYPE,
      userId: ID,
    });
    await newReel.save();
    res.status(200).send("Reels uploded");
  } catch (error) {
    console.error(error);
  }
});

router.get("/all-users-reels", async (req, res) => {
  try {
    const allReels = await Reels.find();
    if(!allReels) return res.status(401).send("Unable to fatch reels");
    res.status(200).json(allReels);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
