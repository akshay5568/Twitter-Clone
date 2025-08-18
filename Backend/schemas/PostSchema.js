const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId , ref:'user'
    },
    content:{
        type:String
    },
   img:{
      type:String
   }

})

module.exports = PostSchema;