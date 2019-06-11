var http=require("http")
var url=require("url")
http.createServer((req,res)=>{
//  解析路径，并进行拼接
    //var data=url.reslove("http://127.0.0.1:3000","/first//login")
    //把对象转换成字符串输出
    var data=url.format({
        protocol:"http",            //协议
        host:"127.0.0.1",           //主机地址
        port:"3000"                 //
    })
    res.end("111")
}).listen(3000)