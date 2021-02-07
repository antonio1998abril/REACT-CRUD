const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const tutorialSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    published:{
        type:Boolean,
        default:true
    }
},{timestamps:true})

module.exports={Tutorial:mongoose.model('tutorial',tutorialSchema)};
