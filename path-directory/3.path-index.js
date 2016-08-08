var path = require("path");//处理路径
var fs = require("fs");
/*
* normalize[规范化]  --》将非标准路径转化为标准路径
* 1.解析 。  。。
* 2.多个杠转成一个杠
* 3.window下的杠转 \  成linux下的杠  /
* 4.如果以杠结尾，保留结尾的杠
* */
console.log(path.normalize('./a///b///c/.././../d/'));
/*
* path.join  ->拼接字符串
*将多个参数值字符串合并为一个路径字符串
* */
console.log(path.join(__dirname,"a","b","..",'msg'));

/*
*resolve
* 以应用程序根目录为起点，根据参数的值解析出一个绝对路径
*1.以程序根目录为起点
* 2.    。。   。
* 3.普通字符串代表当前目录的子目录
* 4. / 绝对路径，代表当前盘符下面的根目录
* 5. 如果没有下一个参数，返回当前路径
* */

console.log(path.resolve());// 空参数代表当前目录路径   __dirname
console.log(path.resolve('/a','..',"b","c"));//d:\b\c
console.log(path.resolve("a","..","b"));//__dirname + b
/*
*
*dirname   取得第一个路径中的目录名(取得参数的父目录)
* */
console.log(path.dirname(__dirname));//D:\jihuitian\nodejs-repair
console.log(path.dirname(__filename));//D:\jihuitian\nodejs-repair\path-directory
console.log(path.dirname(".write.txt"));//.
console.log(path.basename("./../write.txt"));//write.txt
console.log(path.basename("./../write.txt",'.txt'));//write
console.log(path.extname('./write.txt'));//.txt

console.log(path.sep);//路径分隔符  \
console.log(path.delimiter);//环境变量分隔符  ;   分号。比如输出path


