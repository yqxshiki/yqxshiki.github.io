---
title: git-bash基础命令行使用
copyright: true
date: 2019-10-08 17:34:25
tags:
 - git
---

在注册使用了github后，我们也应该学会使用git 来提交管理代码

---
---

# git介绍

是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理

## git常用命令

* #### 配置git 用户名和密码

```s
    git config --global user.name xxx(用户名)

    git confit --global user.email xxx(邮箱)
```

* #### 查看当前git的配置

```s
    git config --list
```

* #### 初始化git 仓库

```s
    git init
```

* #### 查看当前仓库的状态

```s
    git status
```

* #### 将需要提交的代码文件添加的暂存区

```s
    git add xxx(文件名)
    git add xxx(文件名) xxx(文件名)  上传多个文件时中间用空格分开
    git add .  (.是提交当前文件夹内的所有文件)
```

* #### 将暂存区中的代码提交到本地仓库，形成一个版本

```s
    git commit -m "备注"
```

* #### 查看本地仓库中的历史提交版本

```s
    git log
```

* #### 将暂存区中文件删除

```s
    git rm --cached  xxx(文件名)
```

* #### 用暂存区中的文件覆盖工作目录中的文件

```s
    git checkout --xxx(文件名)
```

* #### 回滚到本地仓库中特定版本并覆盖暂存区和工作目录

```s
    git reset --hard commitID(commitID可以到git log中查看提交编号)

    如果有版本1，版本2（后提交），当回滚到版本1时版本2会被自动删除。
```

## git 分支相关命令

* #### 查看分支

```s
    git branch
```

* #### 创建分支

```s
    git branch xxx(分支名)
```

* #### 切换分支

```s
    git checkout xxx(分支名)
```

* #### 创建并切换分支

```s
    git checkout -b xxx(分支名)
```

* #### 删除分支

```s
    git branch -d xxx(分支名)
```

* #### 强制删除分支

```s
    git branch -D xxx(分支名)
```

* #### 合并分支

```s
    git merge  xxx(需要当前主分支上，合并的分支名)
```

##  git  相关命令

* #### 从远程仓库获取代码（拉取所有版本到本地）

```s
    git clone origin
```

* #### 从远程仓库拉取代码（拉取最新版本到本地，开发过程中使用）

```s
    git pull origin master
```

* #### 向远程仓库推送代码

```s
    git push origin master(本地分支名称)：master(远程分支名称)

    如果本地分支同远程分支名称一样，可以只写一个
```

* #### 删除当前别名所对应的远程仓库地址

```s
    git remote remove origin
```