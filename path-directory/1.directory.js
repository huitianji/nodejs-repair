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



fs.rmdirP = function(path){

    var files = [];
    if(fs.existsSync(path)){
        files = fs.readdirSync(path);
        files.forEach(function(file,index){
            var curPath = path + "/" + file;
            if(fs.lstatSync(curPath).isDirectory()){
                fs.rmdirSync(curPath)
            }else{
                fs.unlinkSync(curPath);
            }
        });

    }

}

fs.rmdirP("1");


//-------------------------
//stat--->看一个文件的状态
/*
* size: 25, 文件的大小
* atime: 2016-08-04T09:35:39.878Z,   最后的访问时间
 mtime: 2016-08-04T09:35:39.878Z,    最后的修改时候
 ctime: 2016-08-04T09:35:39.881Z,     最后的创建时间
 birthtime:                           出生时间
* */
fs.stat('./read.me',function(err,stats){
    console.log(stats);
    console.log(stats.isDirectory());//判断是不是目录
    console.log(stats.isFile());//是不是文件
});
//判断文件是否存在
fs.exists("./read.me",function(exists){
    console.log(exists);
})
//取得文件的绝对路径
fs.realpath('./read.me',function(err,path){
    console.log(path)
});


















