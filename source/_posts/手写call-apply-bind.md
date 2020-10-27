---
title: 手写call-apply-bind
copyright: true
date: 2020-8-28 21:39:07
tags:
 - Javascript
categories:
 - web前端
 - 手写系列
---
> call() apply() bind() 都是用来改变 this 的指向的

**call() 和 apply()基本都差不多，但是 call() 可以传入多个参数，apply()第二个参数必须是数组**
call

```javascript
Function.prototype._call = function (ctx) {  
 //ctx为传入的第一个参数  没有传就默认window  
 ctx = ctx || window;  
  
 //this 就是函数  把它当做一个属性或者方法 给ctx  
 //   ctx.fun = this;  
 //  避免ctx里面有fun  覆盖了  
 let fun = Symbol("独一无二");  
 ctx[fun] = this;  
 //args 为除第一个参数外的参数  
 const args = [...arguments].slice(1);  
 //执行函数  
 const result = ctx[fun](...args);  
 //删除方法  
 delete ctx[fun];  
 //返回  
 return result;  
};
```

apply

```javascript
Function.prototype._apply = function (ctx) {  
 ctx = ctx || window;  
  
 let fun = Symbol("独一无二");  
 ctx[fun] = this;  
  
 let result;  
 //如果没有第二个参数 直接执行  
 if (!arguments[1]) {  
 result = ctx[fun]();  
 } else {  
 result = ctx[fun](...arguments[1]);  
 }  
 delete ctx[fun];  
  
 return result;  
};
```

**bind()和call() apply()差不多，都是不会执行函数**

bind

```javascript
Function.prototype._bind = function (ctx) {  
 const func = this;  
 //空函数  
 let emptyFunc = function () {};  
  
 //除一个参数外的参数  
 args = [...arguments].slice(1);  
  
 const temp = function () {  
 //是否是构造函数  
 if (this instanceof temp) {  
 func.apply(this, args.concat([...arguments]));  
 } else {  
 func.apply(ctx, args.concat([...arguments]));  
 }  
 };  
 //继承原函数原型链  
 emptyFunc.prototype = this.prototype;  
 //new   为了不改变 原函数  
 temp.prototype = new emptyFunc();  
 return temp;  
};
```