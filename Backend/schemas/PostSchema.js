const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true
    },
    content:{
        type:String
    },
    img:{
      type:String
    },
    comments:{
        type:String,
        default:""
    },
    likes:{
        type:Number,
        default:0
    },
})

module.exports = PostSchema;