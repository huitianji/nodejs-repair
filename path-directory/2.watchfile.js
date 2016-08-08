/*
*   x监听文件
*
* */
var fs = require("fs");
/**
 *
 * @param curr 当前状态 stat
 * @param prev  修改之前的状态
 */
var func1 = function(curr,prev){
    //console.log("文件改变了");
    console.log(Date.parse(prev.ctime));
    if(Date.parse(prev.ctime) == 0){
        console.log('文件被创建')
    }else if(Date.parse(curr.ctime) == 0){
        console.log("文件被删除了")
    }else{
        console.log("文件被修改了")
    }
}
var func2 = function(curr,prev){
    console.log("我也监听了");

}
fs.watchFile('write.txt',{interval:0},func1);
fs.watchFile('write.txt',{interval:0},func2);


setTimeout(function(){
    fs.unwatchFile('write.txt',func2);
});
















