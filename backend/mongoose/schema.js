const { default: mongoose } = require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true
    },
    age:{
        type:Number,
        require:true
    },
    isdelete:{
      type:Boolean,
      default:false
    }
},{timestamps:true})


// create model
const userModel=new mongoose.model("userModel",userSchema)

module.exports={userModel}