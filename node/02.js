var http=require('http')
var server = http.createServer((req,res)=>{
    // res.end("1+2+3")
    var data={
        username="hs",
        password:"123456"
    }
})
server.listen(3000,()=>{
    console.log("端口已连接")
})