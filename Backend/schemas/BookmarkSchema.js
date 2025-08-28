const mongoose = require("mongoose");

const BookmarkSchema = mongoose.Schema({
  userId: {type:mongoose.Schema.Types.ObjectId, ref:"User"},
  postId:{type:mongoose.Schema.Types.ObjectId, ref:'Post'},
});

module.exports = BookmarkSchema;   
