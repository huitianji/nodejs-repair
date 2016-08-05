/*
*   x监听文件
*
* */
var fs = require("fs");
/**
 *
 * @param curr 当前状态
 * @param prev  修改之前的状态
 */
var func1 = function(curr,prev){
    //console.log("文件改变了");
    if(Date.parse(pre.ctime)==0){
        console.log('文件被创建')
    }else if(Data.parse(curr.ctime)==0){
        console.log("文件被删除了")
    }
}
fs.watchFile('write.txt',func1);