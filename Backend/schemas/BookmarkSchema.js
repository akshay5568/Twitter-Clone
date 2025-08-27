const mongoose = require("mongoose");

const BookmarkSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  content: {
    type: String,
  },
  img: {
    type: String,
  },
  comments: {
    type: String,
  },
  likes: {
    type: Number,
  },
});

module.exports = BookmarkSchema;   
