/**/
/*
* 创建目录
* */

var fs = require("fs");
var path = require("path");
/*
fs.mkdir('test',function(err){
    if(err){
        console.log(err)
    }else{
        console.log("创建目录成功")
    }
});
*/
console.log(path.sep)
fs.mkdirP = function(dir){
    var parts = dir.split("/");//path.sep本操作系统文件目录分隔符   window=>/  linux=>\

    for(var i=0,len = parts.length;i<len;i++){
        var currentPath = parts.slice(0,i+1).join(path.sep);
        if(!fs.existsSync(currentPath)){
            fs.mkdirSync(currentPath);//sync同步
        }
    }

}
fs.mkdirP('1/2',function(err){
    if(err){
        console.log(err)
    }else{
        console.log("创建目录成功");
    }
});

//fs.rmdirSync('1/2')



fs.rmdirP = function(dir){

}

fs.rmdirP("1")