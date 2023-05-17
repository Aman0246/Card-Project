const express=require("express")
const router=express.Router()
const{registration}=require("../mongoose/Controllers.js/registration")
const{allData}=require("../mongoose/Controllers.js/allData")
const{deleteData}=require("../mongoose/Controllers.js/delete")
const{update}=require("../mongoose/Controllers.js/update")
require("../mongoose/MongoConnect")

router.post("/registration",registration)
router.get("/allData",allData)
router.delete("/deletdata/:id",deleteData)
router.put("/update/:id",update)


    
module.exports={router}
