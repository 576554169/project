var http=require("http")
var ejs=require("ejs")

//快速编译
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})

    var data=[num=30]
//    var result=JSON.stringify(data)
//    res.end(result.toString())
//      ejs渲染的方式  compile编译  render渲染
    var str="咿呀嘿<%=num%>"
    var result=ejs.render(str,data)
    res.end(result)
}).listen(3000)