var http=require("http")
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})
    res.write("2333")
    //如何么美好解析对应的标签
    res.write("<h1>264646464</h1>")
    res.end("666")
}).listen(3000)
/*
预习fs  path  npm

*/