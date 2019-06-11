var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    //unlink 删除文件
    if(req.url=="/favicon/.ico"){
        return
    }//输出俩次减少一次
    //mkdir 目录
    // fs.mkdir("./public",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("")
    // })
    //删除目录
    // fs.rmdir("./public",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("")
    // })
    //读取目录 readdir
    fs.readdir("./static",(err,data)=>{
        if(err){
            throw err
        }
        res.end("")
    })
}).listen(3100)