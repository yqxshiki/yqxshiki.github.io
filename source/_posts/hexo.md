---
title: 利用git github hexo 搭建属于自己的个人博客
date: 2019-09-16 17:40:55
copyright: true
categories:
 - Blog
tags:
 - git
 - github
 - hexo
---
##### 1 安装git

之前在学数据库的时候，用的是windows系统,在cmd中敲命令,用得不是很舒服，安装git
* 下载地址：[git](https://git-scm.com/)
* 安装：一路next就行
* 安装好后：打开Git Bash
    输入： git version
# ![](https://blog-1259178461.cos.ap-chengdu.myqcloud.com/Vue%E6%8C%87%E4%BB%A4/git-v.png)
* 这样就安装好了

#### 2 安装node
node是JavaScript的运行环境,其中npm是包管理工具，在之后我们需要利用npm下载一系列的东西
* 下载地址：[node](https://nodejs.org/en/)
* 安装：一路next就行,但在Custom Setup这一步记得选 Add to PATH
* 安装好后：打开cmd
    输入： node -v
     # ![](https://blog-1259178461.cos.ap-chengdu.myqcloud.com/Vue%E6%8C%87%E4%BB%A4/node-v.png)
* 这样就安装好了

#### 3 安装hexo
Hexo 是一个快速、简洁且高效的博客框架。Hexo 使用 Markdown解析文章，在几秒内，即可利用靓丽的主题生成静态网页。
* 先创建一个文件夹，打开git bash ，然后cd到当前文件夹,运行

这是在全局安装hexo
---
cnpm install -g hexo-cli
---
初始化项目
下载需要相应的文件
---
hexo init  
cnpm install
---
完成以后在文件夹中会获得不少文件

#### 4 和github关联
没有注册github的点击这里[github](https://github.com/),注册一个账号，然后创建一个存储库
    ![](https://blog-1259178461.cos.ap-chengdu.myqcloud.com/Vue%E6%8C%87%E4%BB%A4/github-re.png)
在输入Repository name时要注意,名字要与你的github用户名一样，例如：yqxshiki.github.io,前面是你自己的名字后面加上 .github.io



----------------------持续更新中----------------------