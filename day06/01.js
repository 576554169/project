var express=require("express")
//cerateApplication  服务器
var app=express()
//.get 前端请求方式
app.get("/login/id",(req,res)=>{
    console.log(req.params)
    res.send(req.params.id)
})
app.listen(3000,()=>{
    console.log("服务器已启动")
})