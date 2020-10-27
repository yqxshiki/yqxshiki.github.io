---
title: gulp的使用
copyright: true
date: 2020-8-13 21:10:12
tags:
  - Nodejs
  - gulp
categories:
  - web前端
  - 前端自动化构建工具
---

## 安装 gulp 命令行工具

```javascript
npm install -g gulp-cli
```

## 安装 gulp

```javascript
npm install --save-dev gulp
```

## 创建 gulpfile.js 文件

在项目的根目录创建 gulpfile.js

### 引入各种插件

```javascript
const { src, dest, series, watch } = require("gulp");
//src:读取文件
//dest:输出文件
// watch:监听文件
// series:异步执行 task

// 压缩图片
const imagemin = require("gulp-imagemin");
//压缩 css
const csso = require("gulp-csso");
// 文件合并
const concat = require("gulp-concat");
// 清除文件
const clean = require("gulp-clean");
// 提取共同部分
const include = require("gulp-file-include");
// 压缩 html
const htmlmin = require("gulp-htmlmin");
//压缩 JS
const uglify = require("gulp-uglify");
// 自动打开网页
const open = require("open");
// 搭建服务器
const connect = require("gulp-connect");
```

### 创建各个 task

```javascript
// img 压缩
function CompressPicture () {
 src(\['dist/images/**/\*.jpg', 'dist/images/**/_.png', 'dist/images/\*\*/_.jpeg'\]).pipe(clean())
 return src(\['images/**/\*.jpg', 'images/**/_.png', 'images/\*\*/_.jpeg'\])
 .pipe(imagemin())
 .pipe(dest('dist/images'))
}

//CSS 压缩
function CompressCss () {
 src('dist/css/_.css').pipe(clean())
 return src('css/_.css')
 .pipe(csso())
 .pipe(concat('main.css'))
 .pipe(dest('dist/css'))
}

//html 压缩
function CommonHtml () {
 src('dist/public/_.html').pipe(clean())
 return src('public/_.html')
 .pipe(include())
 .pipe(
 htmlmin({
 collapseWhitespace: true,
 minifyCSS: true,
 minifyJS: true
 }))
 .pipe(dest('dist/public'))
}

// 开启服务器
function webServer () {
 connect.server({
 livereload: true,
 root: "./dist/public",
 port: 7777
 })
 // 自动打开浏览器网页
 await open('http:localhost:7777'), { app: \['google chrome', '--incognito'\] }
 console.log('Working the "http:localhost:7777"')
}

function start () {
 return src('./dist/public/index.html')
 .pipe(connect.reload())
}

function WatchFile () {
 watch('./css/\*.css', CompressCss)
 watch('./dist/public/index.html', start)
}
```

### 执行 task

```javascript
exports.default = series(
  CompressPicture,
  CompressCss,
  CommonHtml,
  WatchFile,
  webServer
);
```
