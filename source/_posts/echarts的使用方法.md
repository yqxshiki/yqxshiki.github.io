---
title: ECharts的使用方法
copyright: true
date: 2019-10-30 17:35:23
categories:
 - web前端
 - 图表
tags:
 - ECharts
 - Vue
---

## ECharts的介绍

>ECharts，缩写来自 Enterprise Charts，商业级数据图表，是百度的一个开源的数据可视化工具，一个纯 Javascript 的图表库，能够在 PC 端和移动设备上流畅运行，兼容当前绝大部分浏览器（IE6/7/8/9/10/11，chrome，firefox，Safari等），底层依赖轻量级的 Canvas 库 ZRender，ECharts 提供直观，生动，可交互，可高度个性化定制的数据可视化图表。创新的拖拽重计算、数据视图、值域漫游等特性大大增强了用户体验，赋予了用户对数据进行挖掘、整合的能力

**ECharts官网[点击进入](https://www.echartsjs.com/zh/index.html)**

## 无框架在HTML页面中使用

#### 引入Echarts

```javascript
<script src="https://cdn.bootcss.com/echarts/4.3.0-rc.2/echarts-en.common.js"></script>
```

#### 绘制一个DOM容器

```HTML
<div id="myChart" style="width:100%;height:400px;"></div>
```

#### 初始化Echarts实例

```javascript
 let myChart = echarts.init(document.getElementById("myChart"));
 ```

#### 配置图表的配置项个数据

```javascript
 myChart.setOption({

 })
```

或者

```javascript
let opation={

}
myChart.setOption(option);
```

## Vue中使用

#### 先npm安装Echarts

```javascript
npm install echarts --save
```

#### 引入Echarts

可分为部分引入和全局引入

**部分引入**
在需要使用Echarts图表的vue文件里面导入

```javascript
import echarts from 'echarts'
```

**全局引入**
在main.js中引入,这样就可以再每个vue文件里面使用不需要每一个都引入。

```javascript
import echarts from 'echarts'
Vue.prototype.echarts = echarts
```

#### 绘制DOM容器

```HTML
<div id="myChart" :style="{width: '300px', height: '300px'}"></div>
```

#### 在methods中写实现方法

```javascript
methods: {
    drawLine(
        //初始化化Echarts实例
        let myChart = this.echarts.init(document.getElementById("myChart"));
         //配置图表数据和配置项
         myChart.setOption({
           //放数据
        })
    )
}
```

#### 在页面渲染完成前展示

```javascript
  mounted() {
    this.drawLine();
  },
```
