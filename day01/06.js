var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    //查看文件信息 stats
    if(req.url=="/favicon.ico"){
        return
    }           //oldpath       newpath     callback
    fs.stat("./static/1.txt",(err,stats)=>{
        if(err){
            throw err
        }
        console.log(stats.isFile()) //是否是文件
        console.log(stats.isDirectory())    //是否是目录
        res.end()
    })
}).listen(3000)


//取出当前目录下面的所有文件夹
