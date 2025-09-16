const express = require('express');
const mongoose = require('mongoose');


const ReelsSchema = new mongoose.Schema({
       reelUrl:{
         type:String,
       },
       userId:{
           type:mongoose.Schema.Types.ObjectId,
           ref:"User"
       },
       mediType:{
         type:String
       },
       Reelslikes:[
           {type:mongoose.Schema.Types.ObjectId},
       ]
})

module.exports = ReelsSchema;