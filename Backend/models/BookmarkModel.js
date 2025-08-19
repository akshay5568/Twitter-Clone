const mongoose = require('mongoose');
const BookmarkSchema = require('../schemas/BookmarkSchema');

module.exports = mongoose.model('Bookmark' , BookmarkSchema);