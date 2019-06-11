var express=require("express")
var bodyparse=require("body-parser")
var app=express()
app.use(bodyparse.json())
//处理json数据
app.use(bodyparse.urlencoded({extends:false}))
//处理字符串数据
app.get("/login",(req,res)=>{
    console.log(req.query)
    res.send()
})
app.post("/login",(req,res)=>{
    console.log(req.body.usename)
    console.log()
    res.send()
})
app.listen(3000)