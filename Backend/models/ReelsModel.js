const mongoose = require('mongoose');


const ReelsSchema = require('../schemas/ReelsSchema');

module.exports = mongoose.model('Reels', ReelsSchema);
