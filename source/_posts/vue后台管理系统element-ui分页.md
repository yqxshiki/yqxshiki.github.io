---
title: 前端 vue后台管理系统 element-ui 分页
copyright: true
date: 2019-10-18 18:41:58
categories:
 - web前端
tags:
 - element-ui
 - Vue
---
vue-admin-webapp项目运行地址[点击进入](http://yqxshiki.gitee.io/yqx-vue-admin-webapp/#/login)

[github地址](https://github.com/yqxshiki/vue-admin-webapp)

# Element-ui

**Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库**

element-ui 中文官网[点击进入](http://element-ui.cn/#/zh-CN)

我自己做的vue-admin-webapp项目中的源码

```HTML
    <el-table
      :data="pagingtable.slice((currentPage - 1) * pagesize, currentPage * pagesize)"
      border
      style="width: 100%"
    >
      <el-table-column prop="order" label="序号"></el-table-column>
      <el-table-column prop="gid" label="ID"></el-table-column>
      <el-table-column prop="name" label="产品名称"></el-table-column>
      <el-table-column prop="price" label="价格"></el-table-column>
      <el-table-column prop="number" label="数量"></el-table-column>
      <el-table-column width="120" prop="tag" label="状态">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag =='已取消' ? 'danger':'success' "
            disable-transitions
          >{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pagingtable.length"
        ></el-pagination>
        <!-- total是总数据量 -->
```

```javascript
export default {
  data() {
    return {
      pagingtable: [],  //把接收到的数据存储到这里
      pagesize: 5,      //页面一次展示多少数据
      currentPage: 1    // 第几页
    };
  },
  methods: {
    // 每页展示多少条数据
    handleSizeChange(size) {
      this.pagesize = size;
    },
    // 第几页
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
    },
    // 获取数据
    getorder() {
      this.axios
        .get("/api/order")
        .then(res => {
          // console.log(res);
          this.pagingtable = res.data.data.table;
          // console.log(this.pagingtable.length);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  // 页面渲染前拿到数据
  mounted() {
    this.getorder();
  }
};
```
效果显示
![](https://blog-1259178461.cos.ap-chengdu.myqcloud.com/vue-admin-webapp/%E5%88%86%E9%A1%B5.gif)
