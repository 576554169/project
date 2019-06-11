var express=require("express")
var app=express()
//模板引擎   ejs  art-template
/** 
 * engine
 * 
 * 1.目录要求 views
 * 2.项目中的配置
 * 
*/
//告诉服务器使用什么引擎
//use set 设置
//设置项目的模板引擎
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    //render 渲染  compile 编译
    //res.render("index",{
    //    result:"54454545445454544544545454545"
    //})

    res.render("index",{
        list:[
            {"name":"tom","age":"1"},
            {"name":"toms","age":"1"},
            {"name":"tomy","age":"1"}
        ]
    })

})
app.listen(3000)