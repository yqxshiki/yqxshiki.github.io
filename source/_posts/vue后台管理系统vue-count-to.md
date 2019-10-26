---
title: 前端 vue后台管理系统-vue-count-to 数字滚动插件
copyright: true
date: 2019-10-15 16:25:02
categories:
 - web前端
tags:
 - Vue
---

vue-admin-webapp项目运行地址[点击进入](http://yqxshiki.gitee.io/yqx-vue-admin-webapp/#/login)

[github地址](https://github.com/yqxshiki/vue-admin-webapp)

# vue-count-to 数字滚动插件

在做vue-admin-webapp项目中,首页就是有数字滚动效果,它是一个无依赖项的轻量级vue组件。

##### 安装

```javascript
npm install vue-count-to

```

##### 使用方法

```html
<template>
  <count :startvalue='startvalue' :endvalue='endvalue' :duration='3000'></count>
</template>
```

```javascript
<script>
  import count from 'vue-count-to';
  export default {
    components: {
        count
    },
    data () {
      return {
        startvalue: 0,
        endvalue: 2017
      }
    }
  }
</script>
```

**startvalue:开始值
endvalue:结束值
duration：持续时间**

**效果显示**

![](https://blog-1259178461.cos.ap-chengdu.myqcloud.com/vue-admin-webapp/vuecountto.gif)

还有不少属性可以调整，可以去[vue-count-to](https://www.npmjs.com/package/vue-count-to)学习