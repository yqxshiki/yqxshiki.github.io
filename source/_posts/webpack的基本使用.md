---
title: webpack的基本使用
copyright: true
date: 2020-10-25 21:20:06
tags:
  - Nodejs
  - Webpack
  - Javascript
categories:
  - web前端
  - 前端自动化构建工具
---

> webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

**Webpack 中文文档[点击进入](https://www.webpackjs.com/)**

## Webpack 有以下几个常用配置项:

- entry
- output
- module
- plugins
- model
- devServer
- devtool
- externals

首先初始化项目

```javascript
npm init -y
```

和 package.json 同级创建一个 webpack.config.js

#### entry

项目的入口文件

###### 单入口文件

单入口文件会输出一个 bundle 文件 chunk 默认为 main

```javascript
module.exports = {
  entry: "./src/index.js",
  //index 为chunk值 默认为main
  // entry:{
  //   index:"./src/index.js"
  // }
};
```

###### 多入口文件

**array** 所有的入口文件最终会形成一个 chunk 输出一个 bundle 文件

```javascript
module.exports = {
  entry: ["./src/index.js", "./src/temp.js"],
};
```

**object**  
有几个入口就有几个 chunk 输出几个 bundle 文件

```javascript
module.exports = {
  entry: {
    index: "./src/index.js",
    temp: "./src/temp.js",
  },
};
```

#### output

文件打包输出

```javascript
const { resolve } = require("path");
module.exports = {
  output: {
    //输出的文件名 对应入口文件
    filename: "build.[contenthash].js",
    //输出的文件夹
    path: resolve(__dirname, "build"),
  },
};
```

#### module

该配置主要是使用各种 loader,来处理各种文件资源，比如 html,css,js,vue,jpg,png

安装各种 loader

```javascript
npm i --save-dev html-loader url-loader file-loader eslint-loader css-loader style-loader postcss-loader
postcss-preset-env eslint eslint-plugin-import eslint-config-airbnb-base
```

```javascript
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    module: {
        rules: [
            //css处理
            {
                test: /\.css$/,
                use: [
                    //代替了style-loader 创建一个style标签
                    MiniCssExtractPlugin.loader
                    //解析.css文件
                    "css-loader",
                    //css兼容处理
                    //在package.json中配置
                    // "browserslist": {
                    //     "development": [
                    //       "last 1 chrome version",
                    //       "last 1 firefox version",
                    //       "last 1 safari version"
                    //     ],
                    //     "production": [
                    //       ">0.2%",
                    //       "not dead",
                    //       "not op_mini all"
                    //     ]
                    //   },
                    {
                        loader: "postcss-css",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            ident: "postcss"
                                        }
                                    ]
                                ]
                            }
                        }
                    }
                ]
            },
            //eslint
            //在package.json中添加
            //  "eslintConfig": {
            //   "extends": "airbnb-base",
            //   "env": {
            //     "browser": true
            //   }
            // },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "eslint-loader",
                //优先执行
                enforce: "pre",
                options: {
                    //自动补全
                    fix: true
                }
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                useBuiltIns: "useage",
                                corejs: {
                                    version: 3
                                },
                                targets: {
                                    chrome: "60",
                                    firfox: "50",
                                }
                            }
                        ]
                    ],
                    //开启babel缓存 提高在后续打包的速度
                    cacheDirectory: true
                }
            }
            //处理html文件中的图片
            {
                test: /\.html$/,
                loader: "html-loader",
            },
            //图片处理
            {
                test: /\.(jpg|png|gif|jpeg)/,
                loader: "url-loader",
                options: {
                    //小于8kb就 base64处理
                    limit: 8 * 1024
                    //关闭es6模块化
                    esModule: false
                    name: "[hash:10].[ext]"
                    //打包后的图片存放地址
                    outputPath: "imgs"
                }
            },
            //其他资源
            {
                exclude1: /\.(js|html|css|vue|jpg|png|jpeg|gif|less|scss)/
                loader: "file-loader",
                options: {
                    outputPath: "other"
                }
            }
        ],
    },
};
```

#### plugins

该配置为插件,用来解决在 loader 中无法实现的事情  
安装各种常用插件

```javascript
npm i --save-dev html-webpack-plugin mini-css-extract-plugin optimize-css-assets-webpack-plugin
progress-bar-webpack-plugin
clean-webpack-plugin
```

```javascript
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      //复制一份模板
      template: "./src/index.html",
      //文件名
      filename: "build.[contenthash].html",
      minify: {
        //去除空格
        collapseWhitespace: true,
        //去除注释
        removeComments: true,
      },
    }),
    //压缩css代码
    new OptimizeCssAssetsWebpackPlugin(),
    //所有css打包到一个css文件
    new MiniCssExtractPlugin({
      filename: "build.[contenthash].css",
      chunkFilename: "[hash].css",
    }),
    //启动进度条
    new ProgressBarWebpackPlugin(),
    //每次打包前清除之前的文件
    new CleanWebpackPlugin(),
  ],
};
```

#### mode

```javascript
module.exports = {
  //开发环境
  mode: "development",
  //生产环境
  mode: "production",
};
```

#### devServer

只在开发环境下生效  
该配置使项目在一个小型服务器上运行

```javascript
npm i --sav-dev webpack-dev-server
```

```javascript
const { resolve } = require("path");
module.exports = {
  devServer: {
    //提供静态文件 告诉服务器从哪里获取
    contentBase: resolve(__dirname, "public"),
    //启动gizp压缩
    compress: true,
    //端口号
    port: "8080",
    //启动webpack的模块热替换
    hot: true,
    //自动打开默认浏览器
    open: true,
    //提示信息隐藏
    noInfo: true,
  },
};
```

#### devtool

该配置控制是否生成 source-map

```javascript
module.exports = {
  //开发环境
  devtool: "eval-source-map",
  //生产环境
  devtool: "source-map",
};
```

#### externals

该配置用来防止将某些依赖打包到 bundle 中,而是使用 CDN 来获取,不打包

```javascript
module.exports = {
  externals: {
    jquery: "jQuery",
    vue: "Vue",
    "vue-router": "VueRouter",
    vuex: "Vuex",
    "element-ui": "ELEMENT",
  },
};
```

然后在 index.html 文件中通过 CDN 引入,例如:

```javascript
<script
  crossorigin="anonymous"
  integrity="sha384-WbhdtWslh0AUD1Dhf8OExUvvjZ/VN6o2HHMsYlDXb6uf3IweMH13dGL4V/KgDc7y"
  src="https://lib.baomitu.com/element-ui/2.13.2/index.js"
></script>
```
