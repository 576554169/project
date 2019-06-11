var http=require("http")
var url=require("url")
//处理from表单
var fd=require("formidable")
var fs=require("fs")
var path=require("path")
var sd=require("silly-datetime")
http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        return
    }
    if(req.url=="/dopost" && req.method.toLowerCase()=="post"){
        var form=new fd.IncomingForm()
        form.uploadDir="./lubici";
        //path.extname("1.jpg")
        form.parse(req,(err,fields,files)=>{
            //console.log(fields)
            //console.log(files)
            //console.log(fields.pic)
            //获取后缀名
            var extname=path.extname(files.pic.name)
            //获取路径
            var oldPath=files.pic.path
            var tt=sd.format(new Date(),"YYYYMMDDhhmmss")
            var newPath="./lubici/"+tt+extname
            fs.rename(oldPath,newPath,(err)=>{
                if(err){
                    throw err
                }
                console.log("改名成功")
                res.end("")
            })
           
        })
       
    }
    
}).listen(3000)




//ejs art-template  jade
//express