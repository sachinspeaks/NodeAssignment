const mongoose = require('mongoose')

const UserSchema=new mongoose.Schema({
    name:{
        type : String,
        required:[true,"Please provide your name"],
        maxlength:[20,"Name must be less than 20 characters"]
    },
    id:{
        type:Number,
        required:[true,"Please Provide ID"]
    },
    member:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model('User',UserSchema)

