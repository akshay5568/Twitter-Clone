const express = require('express');
const Post = require('../models/PostModel');
const upload = require('../utils/cloudnary');

const router = express.Router();


router.post('/user-posts',upload.single("file"),(req,res) => {
    const {textContent} = req.body;
    const fileUrl = req.file ? req.file.path : null; // cloudnary url   
    console.log(textContent);
    res.status(200).json({
        post:{
            textContent,
            fileUrl
        }
    });

})

module.exports = router;