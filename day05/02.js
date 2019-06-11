var http=require("http")
var fs=require("fs")
var ejs=require("ejs")
http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    //node渲染方式
    fs.readFile("./str/list.ejs|lol.ejs",(err,data)=>{
        
        var tempalte=data.toString()
        var result={
            list:["首页","新闻","关于"]
        }
        var newdata=ejs.render(tempalte,result)
        res.end(newdata)
    })
    
}).listen(3000)


// <!--
//                <%%> 流程控制标签
  //              <%=%> 输出
    //            <%_%> 去除空格
      //          <%#%> 注释
        //        <%-%> 非转义字符
          //  -->

          //foreach map filter  的区别

    //作业   ejs include 如何使用  foreacg map filter  的区别
    //art-template   预习
    //res.end 和res.send 的区别