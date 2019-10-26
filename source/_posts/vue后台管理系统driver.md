---
title: 前端 vue后台管理系统driver.js蒙版引导
copyright: true
date: 2019-10-16 10:06:12
categories:
 - web前端
tags:
 - Javascript
 - Vue
---

vue-admin-webapp项目运行地址[点击进入](http://yqxshiki.gitee.io/yqx-vue-admin-webapp/#/login)

[github地址](https://github.com/yqxshiki/vue-admin-webapp)

# driver.js

#### 介绍

driver.js 蒙版引导,也就是我们经常第一次使用时,会引导你正确使用该项目的功能

>* 简单：易于使用，完全没有外部依赖性
>* 轻量级：〜4kb大小，原始JavaScript，无外部依赖
>* 高度可定制：具有强大的API，可以根据需要使用
>* 突出显示任何内容：突出显示页面上的任何（字面上是任何）元素
>* 功能介绍：为您的Web应用程序创建功能强大的功能介绍

#### 安装

```javascript
npm install driver.js
```

##### 使用方法

```html
<template>
    <div id="driver">
        <div @click="guide()">引导</div>
    </div>
</template>
```

```javascript
// 引用库
import Driver from "driver.js";
import "driver.js/dist/driver.min.css";
// 新建一个guide.js 引人
import steps from "./guide";
export default {
  mounted() {
    this.driver = new Driver({
      opacity: 0.5,//透明度
      animate: true,//动画
      padding: 10,//边距
      allowClose: true,//点击覆盖是否应该关闭
      overlayClickNext: false,//单击覆盖是否应移动到下一步
      doneBtnText: "完成",
      closeBtnText: "关闭",
      nextBtnText: "下一步",
      prevBtnText: "上一步"
    });
  },
  methods: {
    guide() {
      this.driver.defineSteps(steps);
      this.driver.start();
    }
  }
```

**新建的guide.js**

```javascript
const steps = [
    {
        element: '#sidebar',//绑定元素,不要用class,id具有唯一性,比较好
        popover: {
            title: '折叠按钮',//标题
            description: '点击收缩和展开菜单导航',//内容
            position: 'bottom'//显示位置
        }
    },
    {
        element: '#domshouye',
        popover: {
            title: '面包屑导航',
            description: '用于显示当前菜单的位置',
            position: 'bottom-right'
        }
    },
    {
        element: '#domMessage',
        popover: {
            title: '通知',
            description: '点击图标，右侧会显示通知消息',
            position: 'bottom-right'
        }
    },
    {
        element: '#domFullScreen',
        popover: {
            title: '全屏显示',
            description: '点击图标，放大全屏显示系统',
            position: 'bottom-right'
        }
    },

]
export default steps
```

效果显示
![](https://blog-1259178461.cos.ap-chengdu.myqcloud.com/vue-admin-webapp/driver.gif)

更加详细的内容可以去官网查看[点击进入](https://kamranahmed.info/driver.js/)