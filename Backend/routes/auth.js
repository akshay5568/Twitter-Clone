const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken')
const User = require('../models/UserModel');


const router = express.Router();
//Signup
router.post('/signup' , async (req,res) => {
    try {
        const {name,email,password} = req.body;


        const existingUser = await User.findOne({email});
        if(existingUser) return res.status(400).json({massage:"User Already Exist"});

        const hashPassword = await bcrypt.hash(password, 10);


        const newUser = new User({name,email,password:hashPassword});
        await newUser.save();
        res.status(201).json({massage:"User Register successfully"})
    }
    catch (e){
        res.status(500).json({erorr:e.massage});
    }
})

//Login 
router.post('/login', async (req,res) => {
    const {email,password} = req.body;
   
    const user = await User.findOne({email});
    if (!user) return res.status(400).json({massage:"Invalid credentials"});

    const isPasswordRight = await bcrypt.compare(password,user.password);
    if(!isPasswordRight) return res.status(400).json({massage:"Invalid credentials"});

    const token = JWT.sign({id:user._id}, process.env.JWT_SECRET, {expiresIn:"300d"});
    res.status(200).json({token});
})



//User
router.get('/user' , async (req,res) => {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) return res.status(401).send("No token found");

    const decode = JWT.verify(token, process.env.JWT_SECRET);
    const userDetails = await User.findById(decode.id);
    res.status(200).json(userDetails);
})



module.exports = router;