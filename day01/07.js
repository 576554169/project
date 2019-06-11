var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    if(req.url=="/favicon/.ico"){
        return
    }
    fs.stat("./static/1.txt",(err,stats)=>{
        if(err){
            throw err
        }
        console.log(stats.isFile()) //是否是文件
        console.log(stats.isDirectory())    //是否是目录
        res.end()
    })
    false.readdir("./static",(err,data)=>{
    if(err){
        throw err
    }

    res.end("")
})
}).listen(3100)