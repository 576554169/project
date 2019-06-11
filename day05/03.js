var http=require("http")
var fs=require("fs")
var art=require("art-template")
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
        var newdata={
            list:["首页","新闻","关于"]
        }
        fs.readFile("./str/list.art",(err,data)=>{
            var result=art.render(data.toString(),newdata)
            res.end(result)
        })
    
}).listen(3000)

//npm i express --save