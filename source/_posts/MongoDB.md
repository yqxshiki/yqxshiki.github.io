---
title: MongoDB的常用使用方式
copyright: true
date: 2019-11-20 11:49:58
categories:
 - 数据库
tags:
 - MongoDB
 - mongoose
 - node
---
>MongoDB 是一个基于分布式文件存储的数据库。由 C++ 语言编写。旨在为 WEB 应用提供可扩展的高性能数据存储解决方案。
>
>MongoDB 是一个介于关系数据库和非关系数据库之间的产品，是非关系数据库当中功能最丰富，最像关系数据库的。

**mongoDB官网[点击进入](https://www.mongodb.com/)**

>Mongoose是在node.js异步环境下对mongodb进行便捷操作的对象模型工具

**mongoose文档[点击进入](http://www.mongoosejs.net/)**

### mongoose安装

```javascript
npm i mongoose --save
```

### mongoose使用

```javascript
//引入mongoose
const mongoose = require('mongoose');

//连接数据库，就算没有这个数据库也会创建这个数据库
mongoose.connect("mongodb://localhost:27017/mongoose_test", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
// 监听数据库
mongoose.connection.once('open', (err) => {
    if (!err) {
        console.log("连接成功····")
    }
})

//定义Schema，每个 schema 都会映射到一个 MongoDB collection ，并定义这个collection里的文档的构成。
const Schema = mongoose.Schema;

let ArticleSchema = new Schema({
    title: {
        type: String
    },
    body: {
        type: String
    },

})
// 定义一个模型
let Article = mongoose.model('Articles', ArticleSchema)

```

#### 增

```javascript
app.get("/add", async (req, res) => {
    let arr = await Article.create([{
            title: "第一篇文章",
            body: "第一篇内容"
        },
        {
            title: "第二篇文章",
            body: "第二篇内容"
        },
        {
            title: "第三篇文章",
            body: "第三篇内容"
        }
    ])
    res.send(arr);
})
```

#### 查

```javascript
app.get("/find", async (req, res) => {
    // 查询所有
    let arr = await Article.find();
    // 查询满足要求的第一个
    // let arr = await Article.findone({
    //     title: "第一篇文章"
    // })
    res.send(arr);
})
```

#### 改

```javascript
app.post("/put", async (req, res) => {
    // updateOne    改一个
    // updateMany   改多个,使用数组  
    let arr = await Article.updateOne({
        title: "第三篇文章"
    }, req.body)
    res.send(arr);
})
```

#### 删

```javascript
app.delete("/delete", async (req, res) => {
    // remove       结合体，都可以
    // deleteOne    删一个
    // deleteMany   删多个,使用数组
    let arr = await Article.remove({
        title: "第二篇文章"
    })
    res.send(arr);
})
``
**持续更新中**
