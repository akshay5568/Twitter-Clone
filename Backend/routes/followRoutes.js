const express = require('express');
const User = require('../models/UserModel');


const router = express.Router();


router.get('/user-followers/:id' , async (req,res) => {
    const id = req.params.id;
   
})


module.exports = router;