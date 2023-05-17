const{userModel}=require("../schema")

const registration=async (req,res)=>{
 try {
    const {name:name,email:email,age:age}=req.body
    
    if (!name || !email || !age) {return res.send({ msg:"Empty! Field" });}      
    
    
    
    const user=await userModel.findOne({email:email})
    if(user){
       
       return res.send({msg:"user already exist"})
      }
   else{
       
      const newuser = await userModel.create({name:name,email:email,age:age})
      res.send({msg:"Registration Done",user:newuser})
   }   




} catch (error) {
    res.send({msg:"error in registration"})
}
}






module.exports={registration}