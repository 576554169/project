var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    //unlink 删除文件
    if(req.url=="/favicon/.ico"){
        return
    }
    fs.unlink("./static/1.txt",(err)=>{
        if(err){
            throw err //throw 抛出
        }
        res.end("")
    })
}).listen(3100)