const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    img:{
        type:String,
        default:"https://images.unsplash.com/photo-1439792675105-701e6a4ab6f0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGFya3xlbnwwfHwwfHx8MA%3D%3D"
    },
    profileImg:{
        type:String,
        default:"https://images.unsplash.com/photo-1680763921539-afae7b2c219e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&   ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R2VybWFuJTIwQWN0b3J8ZW58MHx8MHx8fDA%3D"
    },
    following:[{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
    followers:[{type:mongoose.Schema.Types.ObjectId , ref:'User'}],
})

module.exports = UserSchema;