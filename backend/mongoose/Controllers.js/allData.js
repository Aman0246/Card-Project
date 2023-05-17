const{userModel}=require("../schema")

const allData=async(req,res)=>{
    
    try {
        const showData=await userModel.find({isdelete:false})
        res.send({msg:"all Data",allUser:showData})
    } catch (error) {
        res.send({msg:"error in allData"})
    }
}
module.exports={allData}    