//静态资源
//把html通过服务端渲染出来
var express=require("express")
var app=express()
app.use(express.static("./static"))
app.listen(3000)