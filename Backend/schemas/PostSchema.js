const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  content: {
    type: String,
  },
  img: {
    type: String,
  },
  mediaType:{
     type:String
  },
  comments: {
    type: String,
    default: "",
  },
  likes: {
    type: Number,
    default: 0,
  },
  likedBy: [{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
});

module.exports = PostSchema;
