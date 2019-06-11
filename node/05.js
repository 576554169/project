var http=require("http")
var url=require("url")
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"}) //将乱码转换为自己输入的值；
    var data=url.parse(req.url,true).query
    if(data.username=="admin"&&data.password=="123"){
        res.end("登陆成功")
    }else{
        res.end("登陆失败")
    }
    
}).listen(3000)