var express=require("express")
var router=express.Router()
var app=express()
//use
//使用路由 中间件
app.use(router)
//验证码接口
router.get("/vericode",(req,res)=>{
    var randomNum=function(min,max){
        return Math.ceil(Math.random()*(max-min)+min)
    }
    var str="123456789abcdefghijklmnopqrstuvzxty"
    var newStr=""
    for(var i=0;i<4;i++){
        newStr+=str[randomNum(0,str.length-1)]
    }
    res.send({"success":"ok","data":newStr})
})
app.listen(3000)
//express-session
//git
//mongodb