---
title: 原生JS拖拽事件
copyright: true
date: 2019-10-26 12:00:24
categories:
 - web前端
tags:
 - Javascript
---

#### 拖拽对象必须的有定位的

```javascript
.app {
        width: 100px;
        height: 100px;
        background: red;
        /* margin: 20px; */
        position: absolute;
        border: 10px solid black;
        cursor: move;
}
<div class="app"></div>
```

**当对象加了margin后
app.offsetWidth,app.offsetHeight是不包括margin的，所以会出现有一段空白区不能移动**

拖拽事件为分为三部分组成

* 鼠标按下
* 鼠标移动
* 鼠标松开

```javascript
window.onload = function () {
    let app = document.getElementsByClassName("app")[0];
    // console.log(app);
    ​
    // 鼠标按下
    app.onmousedown = function (e) {
        // console.log(e.clientX, e.clientY)
        // 这是 鼠标落下的点 => 游览器的可视区域的距离(不包括工具栏和滚动条)
    ​
        // console.log(app.offsetLeft, app.offsetTop);
        // 这是 对象app的margin => 最近有定位的父级padding的距离(没有定位就到文档的距离)
    ​
        let disx = e.clientX - app.offsetLeft;
        disy = e.clientY - app.offsetTop;
        // console.log(disx, disy)
        // disx disy 就是 鼠标落下的点到 =>对象app的边框距离
    ​
        // 鼠标移动
        document.onmousemove = function (e) {
            let movex = e.clientX - disx;
            let movey = e.clientY - disy;
            // movex movey 就是移动后 对象app的margin => 浏览器可视区域的距离
    ​
            if (movex < 0) {
                movex = 0;
            } else if (movex > window.innerWidth - app.offsetWidth) {
                movex = window.innerWidth - app.offsetWidth
            }
            if (movey < 0) {
                movey = 0;
            } else if (movey > window.innerHeight - app.offsetHeight) {
                movey = window.innerHeight - app.offsetHeight
            }
            // 不超出边界
    ​
            let lefts = app.style.left = movex + "px";
            let tops = app.style.top = movey + "px";
            // console.log(lefts, tops)
        }
    ​
        // 鼠标松开
        document.onmouseup = function () {
            // 取消鼠标之前的操作
            this.onmousemove = null;
            this.onmousedown = null;
        }
    }
}
