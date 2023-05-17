const express=require("express")
const app=express()
app.use(express.json())
const {router} =require ("./Router/router")
port=8080


var cors = require('cors')
app.use(cors({
    credentials:true,
    origin:"http://localhost:3000"  
}))
app.use("/",router) 


app.listen(port,()=>{
    console.log(`port ${port}`)
})