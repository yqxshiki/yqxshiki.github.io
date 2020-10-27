---
title: 原生JS实现回到顶部动画
copyright: true
date: 2020-02-06 12:47:09
tags:
  - Javascript
categories:
  - web前端
---

> 点击按钮回到页面顶部这是个在日常开发中经常用的效果，今天，就用原生 Javascript 来实现

```javascript
<style>
    * {
        margin: 0;
        padding: 0;
    }

    .top {
        width: 300px;
        height: 300px;
        background: #f40;
        line-height: 300px;
        cursor: pointer;
    }
</style>
<body>
    <div class="top"></div>
</body>
```

```javascript
let divtop = document.getElementsByClassName("top")[0];
divtop.addEventListener("click", function () {
  let timer = setInterval(() => {
    // 获取滚动条高度
    let wTop = document.documentElement.scrollTop || document.body.scrollTop;

    // 上升速度
    let speed = Math.floor(-wTop / 5);

    // 上升过程中逐步获取滚动条高度
    document.documentElement.scrollTop = document.body.scrollTop = wTop + speed;

    // 到顶部时.停止
    if (wTop === 0) {
      clearInterval(timer);
    }
  }, 30);
});
```
