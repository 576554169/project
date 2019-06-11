/*
http  path  url  fs   querystring  moudle  模块


silly-datetime   处理时间戳  formidable  处理表单数据  包


events  事件  操作服务端
*/
var events=require("events")
//实例事件
var eventEmitter=new events.EventEmitter
//绑定事件
//eventEmitter.on("start",()=>{
//    console.log("event start")
//})
//触发event事件
//eventEmitter.emit("start")   //emit 触发
//触发一次事件
//eventEmitter.once("start",()=>{
//    console.log("start")
//})
//eventEmitter.emit("start")
//eventEmitter.emit("start")
//添加错误事件
//eventEmitter.on("error",()=>{
//    console.log("error")
//})
//eventEmitter.emit("error",new Error("focus error"))
//eventEmitter.emit("error",new Error("arguments must be a string"))
//removeListener
//添加 addListener
//eventEmitter.on("smallevent",(arg1,arg2)=>{
 //   console.log(arg1,arg2)
//})

//eventEmitter.removeListener("smallevent",()=>{
//    console.log("smallevent被移除")
//})
//eventEmitter.emit("smallevent","1","2")



function six(){
    console.log("six six sex")
}
function two(){
    console.log("lvv")
}
eventEmitter.on("aa",six)
eventEmitter.on("aa",two)
eventEmitter.removeListener("aa",six)
eventEmitter.emit("aa")
//jq  on  live  bind  delegate