const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://amankashyap:EcBHGzVKIVJRo1Mp@cluster0.jdvtfyy.mongodb.net/Card').then(()=>console.log("mongoose is connected...."))
.catch((e)=>{console.log("mongose is not connected")})