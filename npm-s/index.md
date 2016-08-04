一：【模块安装】
本地安装--》本地库
npm install mime

全局安装--》安装的是可执行文件
npm install mime -g

--
1>npm init-->package.json
--
echo hell > hello.txt   写文件，先把里面的内容清空，然后再写入

echo hell >> hello.txt  追加文件

2>创建 index.js
3>创建用户
    npm adduser
4>npm publish  ---> 把项目发布到官方网站上去


npm --help

5>搜索项目
    npm search jht
6> npm view 项目名

7>查看全局安装目录

    npm root -g
//用户配置
c:\users\Administrator\.npmrc
//全局配置
cd:\Program Files\nodejs\node_modules\npm\npmrc
prefix=${APPDATA}\npm   //用户目录下

npm config set prefix "d:\"


npm list -g  全局下安装的包
npm list

npm uninstall 包名   //卸载

npm update   更新。。
npm update -g

doskey /history   查看历史上的所有命令

npm unpublish --force

7---3










