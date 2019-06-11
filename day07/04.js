var express=require("express")
var art=require("express-art-template")
var app=express()
//设置模板引擎
//express express-art-template
//app.set("view engine","art-template")
//engine 引擎 第一个参数  模板类型  html ejs art
app.set("view engine","art-tempalte")
app.engine("art",art)
app.get("/",(req,res)=>{
    res.send("bar.art",{
        name:"5879456"
    })
})
app.listen(3000)

/*

1.express-art-template和art-template的区别
    是否在express包含 art-template集成
2.如何渲染视图
    render
3.express是否集成art-template
    否
*/
