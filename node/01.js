//加载 http（服务）模块
var http=require("http")
// createver 创建服务器 callback
http.createServer((req,res)=>{
    //req request  请求 res response 请求
    console.log("hello word")
    //设置请求响应头  状态码  文本类型  text/html  编码 charset utf-8
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    
    res.end("结束")
    //结束响应
    
    
}).listen(3000)
//listen 监听端口