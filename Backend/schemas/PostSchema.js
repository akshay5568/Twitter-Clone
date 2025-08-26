const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  content: {
    type: String,
  },
  img: {
    type: String,
  },
  comments: {
    type: String,
    default: "",
  },
  likes: {
    type: Number,
    default: 0,
  },
  likedBy: [{type:mongoose.Schema.Types.ObjectId, ref:'user'}],
  bookmarks:[{type:mongoose.Schema.Types.ObjectId, res:'user'}],
});

module.exports = PostSchema;
