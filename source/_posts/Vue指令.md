---
title: Vue初识--vue常用指令
date: 2019-09-18 10:58:37
copyright: true
categories:
 - web前端
tags:
 - Vue
---
#### Vue介绍

Vue 是目前主流前端三大框架之一，是一套渐进式框架。他的作者是一位华人-尤雨溪，有中文官方文档
[Vue中文官方文档](https://vuejs.bootcss.com/v2/guide/)

在这里我们选择用CDN的方式来引入

```javascript
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

#### Vue实例
每一个Vue都是通过new Vue开始的

```javascript
let vm =new Vue({
    el:"",
    data:{

    },
    methods:{

    },
    computed:{
        
    }
})
```

在HTML中我们可以使用 {{表达式}} 这种来插值.

##### v-if
v-if 绑定的值在data中定义,根据定义值的真假来插入或者移除元素

```javascript
<div id="app">

    <p v-if="scok">你能看到我吗？</p>

</div>
    let vm =new Vue({
    el:"#app",
    data: {
        scok:true
    }
})
```
当 scok的值为  false   null undefined 0 时，都不显示,为移除元素。


##### v-show
v-show 和v-if相识 都是通过判断boolean 来显示或者不显示元素,当定义的值为 false  null undefined 0是 ,不显示
```javascript
    <div id="app">
    <p v-show="msg">你猜你看得到我吗？</p>
    </div>

    let vm =new Vue({
        el:"#app",
        data:{
            msg: null
        }
    })
```

###### v-show 和 v-if 的区别

v-show 当不显示时
     ![](https://blog-1259178461.cos.ap-chengdu.myqcloud.com/Vue%E6%8C%87%E4%BB%A4/v-show.png)
可以看到是用css 将display:none; 来就行隐藏

v-show 安全性不高，主要用于特殊类型的切换【显示与隐藏】,不适合做后台管理系统


而v-if ![](https://blog-1259178461.cos.ap-chengdu.myqcloud.com/Vue%E6%8C%87%E4%BB%A4/v-if.png)
本质是移除Dom节点
适合后台管理系统
安全性比较高

#### v-model 
v-model是数据双向绑定

```javascript
<div id="app">
    <input type="text" v-model="msg">
    {{msg}}
    <hr>
    <input type="checkbox" name="checkbox" v-model="list">
    {{list}}
    <hr>
    <input type="radio" value="true" name="radio" v-model="radio">
    <label for="">true</label>
    <input type="radio" value="false" name="radio" v-model="radio">
    <label for="">false</label>
    {{radio}}
    <hr>
    <input type="checkbox" value="apple" v-model="checkboxlist">
    <input type="checkbox" value="orange" v-model="checkboxlist">
    <input type="checkbox" value="Banana" v-model="checkboxlist">
    {{checkboxlist}}
    <hr>
    <select v-model="array">
        <option>a</option>
        <option>b</option>
        <option>c</option>
        <option>d</option>
    </select>
    {{array}}
</div>
 let vm =new Vue({
    el:"#app",
    data:{
        msg:"",
        list:true
        radio:[],
        checkboxlist: [],
        array:[]
    }
})
```

通过v-model绑定,当用户在input框中输入数据时,会通过
{{msg}}显示出来

当是单选框时要注意，绑定的值要是数组[]
    多个复选框时,绑定的值也要是数组[]
    下拉列表时,绑定的值也要是数组[]


----------------------持续更新中----------------------