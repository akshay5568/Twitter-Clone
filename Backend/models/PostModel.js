const mongoose = require('mongoose');

const PostSchema = require('../schemas/PostSchema');

module.exports = mongoose.model('Post' , PostSchema);