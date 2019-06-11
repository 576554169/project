var express=require("express")
var bodyparser=require("body-parser")
var app=express()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))
app.post("/login",(req,res)=>{
    let user={
        username:"admin",
        password:"123456",
        tokenId:"1"
    }
    if(req.body.username==user.username&&req.body.password==user.password){
        res.send({"success":"ok"})
    }else{
        res.send({"error":"failed"})
    }
    
})
app.listen(3000)