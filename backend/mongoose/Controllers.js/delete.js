const{userModel}=require("../schema")

const deleteData=async(req,res)=>{
    const id=req.params.id
    const user=await userModel.findByIdAndUpdate(id,{isdelete:true},{new:true})
    const updatadata=await userModel.find({isdelete: false})
    res.send(updatadata)
}

module.exports={deleteData}