---
title: uniapp的request封装
copyright: true
date: 2020-04-26 22:20:27
tags:
  - vue
  - uniapp
categories:
  - 小程序
---

> uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到 iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉/淘宝）、快应用等多个平台。

[uniapp 官网](https://uniapp.dcloud.io/quickstart)

# 封装 uni.request

### 创建 uni_url.js 文件

```javascript
let uni_url = "";

if (process.env.NODE_ENV == "development") {
  uni_url = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"; // 开发环境
} else {
  uni_url = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"; //生产环境
}

export default uni_url;
```

### 创建 uniRequest.js 文化

```javascript
import uni_url from "./uni_url.js";

export const \$uniRequset = (data) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: uni_url + data.url,
      method: data.method || "GET",
      data: data.data || "{}",
      success: (res) => {
        resolve(res);
      },
      fail: (err) => {
        uni.showToast({
          title: "请求接口失败!",
          icon: "none",
        });
        reject(err);
      },
    });
  });
};
```

### main.js 注册

```javascript
import $uniRequest from "./uniRequest.js";
Vue.prototype.$uniRequest = $uniRequest;
```
