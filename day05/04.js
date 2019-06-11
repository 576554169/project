var express=require("express")
var app=express()
app.get("/",(req,res)=>{
    res.send("express")

    req.send({"success":"ok","data":{"name":"tom"}})
})

//express 路由不区分大小写
app.get("/Bb",(req,res)=>{
    
})
app.listen(3000)