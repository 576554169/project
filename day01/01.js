var http=require("http")
var fs=require("fs")
http.createServer((req,res)=>{
    // readFile  读文件  异步  readFileSync  同步
    // fs.readFile("./static/1.txt",(err,data)=>{
    //    res.end(data.toString)
    // })
    // writeFile 写入
    //r read    读
    //w writed  写
    //a append 追加
    if(req.url=="/favicon/.ico"){
        return
    }
    fs.writeFile("./static/2.txt","王者荣耀",{"flag":"a"},(err)=>{
        if(err){
            return
        }
        var date = fs.readFileSync("./static/2.txt","utf-8")
           res.end(data)
    })
    //把1.txt的内容读取出来完后在写入到2.txt里面
}).listen(3000)
//readFile 读文件  异步  readFileSync 同步