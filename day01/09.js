//exports 必须声明变量  才能显示  否则则是空
//module   包含exports
//1.exports=module.exports  exports引用module.exports的值
//2.module.exports 指向的是一个当前模块
//3.module.exports 的默认值为一个实际对象，而exports的默认为空对象


//  占用的内存不同，显示的值为module.exports
module.exports={"name":"father"}
exports={"name":"child"}