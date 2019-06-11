var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    //修改文件名称 rename
    if(req.url=="/favicon.ico"){
        return
    }           //oldpath       newpath     callback
    fs.rename("./static/2.txt","./static/1.txt",(err)=>{
        if(err){
            throw err
        }
        res.end("")
    })
}).listen(3000)