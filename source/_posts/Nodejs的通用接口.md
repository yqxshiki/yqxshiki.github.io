---
title: Nodejs的通用接口
copyright: true
date: 2020-01-03 17:43:14
categories:
 - Nodejs
tags:
 - Nodejs
 - Express
---
>在正常开发中，我们经常实现一个数据的增删改查，这样在后端我们需要根据一个数据创建
四个接口，如果数据过多，就会有好多的冗余代码.

## 使用express创建服务器

```javascript
const express = require('express')
const app = express()

// 解析json
app.use(express.json())

//解决跨域
app.use(require('cors')())

// 数据库
require('./plugins/db')(app)

// 路由
require('./routes/admin/index')(app)

app.listen(4000, () => console.log('app listening on port 4000!'))
```

## 连接Mongodb数据库

```javascript
module.exports = app => {
    const mongoose = require("mongoose")
    mongoose.connect('mongodb://localhost:27017/blog', {
        useCreateIndex: true,
        useFindAndModify: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}
```

## routes 接口展示

```javascript
module.exports = app => {

    const express = require("express")
    const router = express.Router({
        mergeParams: true
    })

    // 增
    router.post('/add', async (req, res) => {
        const data = await req.Model.create(req.body);
        res.send(data)
    })
    //删
    router.delete('/delete/:id', async (req, res) => {
        const data = await req.Model.findByIdAndDelete(req.params.id);
        res.send({
            status: true
        })
    })
    // 改
    router.post("/resive/:id", async (req, res) => {
        const data = await req.Model.findByIdAndUpdate(req.params.id, req.body);
        res.send(data)
    })
    // 查
    router.get("/check", async (req, res) => {
        const data = await req.Model.find();
        res.send(data);
    })

    app.use("/api/rest/:resource",async(req,res,next)=>{
        //将接口名变为模型的文件名 例如:/api/rest/categoies    模型名就必须是Category
        const modelname=require('inflection').classify(req.params.resource)
        //models 里面是模型
        req.Model=require(`../models/${modelname}`)
        await next();
    },router)
    
}
```