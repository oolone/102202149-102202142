# 校园项目伙伴招募小程序

## 项目介绍

本项目旨在为大学生提供一个平台，以便他们能够跨专业寻找项目合作伙伴，共同参与创业或学术项目。通过这个小程序，用户可以注册账号、浏览和搜索项目、发布自己的项目、进行项目管理，并通过内置的聊天功能进行沟通。

## 目录说明

### 以下是本项目的目录结构：
#### 校园项目伙伴招募小程序
# 目录结构说明

## 一、顶层文件
- `.eslintrc.js`：用于代码风格检查的配置文件。
- `.gitignore`：指定哪些文件或目录不需要被 Git 跟踪。
- `app.js`：小程序的入口文件。
- `app.json`：小程序的全局配置文件。
- `app.wxss`：小程序的全局样式文件。
- `project.config.json`：项目配置文件。
- `project.private.config.json`：项目私有配置文件。
- `README.md`：项目说明文档。
- `tree.txt`：目录结构文本文件。

## 二、`.git`目录
用于版本控制，包含配置文件、钩子脚本、信息和日志等。

## 三、`cloud`目录
存放与云环境相关的文件。

## 四、`data`目录
用于存放数据文件。

## 五、`images`目录
页面图标的图标存放处。
- `burger.png`
- `burger_focus.png`
- `chat.png`
- `chat_focus.png`
- `discovery.png`
- `discovery_focus.png`
- `index.png`
- `index_focus.png`

## 六、`pages`目录
页面存放处。
### （一）`answer`目录（项目详情）
- `answer.js`
- `answer.json`
- `answer.wxml`
- `answer.wxss`

### （二）`chat`目录（聊天页面）
- `chat.js`
- `chat.json`
- `chat.wxml`
- `chat.wxss`

### （三）`contact`目录（对话页面页）
- `contact.js`
- `contact.json`
- `contact.wxml`
- `contact.wxss`

### （四）`createpro`目录（创建项目页）
- `createpro.js`
- `createpro.json`
- `createpro.wxml`
- `createpro.wxss`

### （五）`discovery`目录（个人项目页）
- `discovery.js`
- `discovery.json`
- `discovery.wxml`
- `discovery.wxss`

### （六）`forget`目录（找回密码）
- `forget.js`
- `forget.json`
- `forget.wxml`
- `forget.wxss`

### （七）`index`目录（首页，查找项目）
- `index.js`
- `index.json`
- `index.wxml`
- `index.wxss`

### （八）`login`目录（登录注册页面）
- `login.js`
- `login.json`
- `login.wxml`
- `login.wxss`

### （九）`mine`目录（修改个人信息）
- `mine.js`
- `mine.json`
- `mine.wxml`
- `mine.wxss`

### （十）`more`目录（个人信息页）
- `more.js`
- `more.json`
- `more.wxml`
- `more.wxss`

### （十一）`myproject`目录（个人项目页，备用版本）
- `myproject.js`
- `myproject.json`
- `myproject.wxml`
- `myproject.wxss`

### （十二）`question`目录（项目详情）
- `question.js`
- `question.json`
- `question.wxml`
- `question.wxss`

### （十三）`select`目录（搜索功能）
- `select.js`
- `select.json`
- `select.wxml`
- `select.wxss`

### （十四）`wait`目录（等待审核页面）
- `wait.js`
- `wait.json`
- `wait.wxml`
- `wait.wxss`

## 七、`utils`目录
存放工具函数文件，如`util.js`。

## 使用说明

### 运行步骤

1. **扫描二维码**：使用微信扫描二维码进入小程序。
2. **登录/注册**：使用注册账号或测试账号（102202142，123456）登录。
3. **浏览项目**：在首页查看项目，若没有项目，可进入项目发布页发布。
4. **发布项目**：在项目发布页填写信息并发布，发布后返回首页刷新查看更新。
5. **聊天功能**：查看聊天选项，但请注意聊天功能暂未完全开发。
6. **个人信息**：在个人信息页修改个人信息和更新图像。

### 测试步骤

1. **启动小程序**：使用微信扫描二维码进入小程序。
2. **登录测试**：使用注册账号或测试账号登录。
3. **项目浏览**：在首页查看是否有项目，若没有可进入项目发布页发布项目。
4. **项目发布**：尝试在项目发布页发布项目并在首页刷新查看更新情况。
5. **聊天页面**：进入聊天页面查看聊天选项，但需注意聊天功能暂未完全开发。
6. **个人信息修改**：进入个人信息页修改个人信息和更新图像。

# 贡献指南

我们欢迎任何形式的贡献，包括代码提交、bug报告、功能请求等。请确保在提交前阅读我们的[贡献指南](https://github.com/oolone/102202149-102202142)

