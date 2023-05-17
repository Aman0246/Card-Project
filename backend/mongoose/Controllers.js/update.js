const{userModel}=require("../schema")

const update=async(req,res)=>{
    const id=req.params.id
    const{name:name,email:email,age:age,}=req.body
    try {
        const singleUser=await userModel.findByIdAndUpdate(id,req.body,{new:true})
        const a=await userModel.find()
        res.send({updatedata:a})
    } catch (error) {
        res.send({msg:"Error in Update"})
    }
}

module.exports={update}