<div align="center">
<img src="./src/assets/openai.svg" style="width:64px;height:64px;margin:0 32px" alt="icon"/>

<h1 align="center">ChatGPT Web</h1>

A commercially-viable ChatGpt web application built with React.

可部署商业化的 ChatGpt 网页应用。

</div>

## 说明

> [!IMPORTANT]
> **此项目 Fork 自 [79E/ChatGpt-Web](https://github.com/79E/ChatGpt-Web)**
>
> 添加 gemini 支持
>
> 后端改为 golang 实现，[访问后端](https://github.com/ctxgo/chatgpt-web-go)


### 页面截图

![cover](https://files.catbox.moe/tp963e.png)
![cover](https://files.catbox.moe/y5avbx.png)
![cover](https://files.catbox.moe/k16jsz.png)
![cover](https://files.catbox.moe/8o5oja.png)

## 🤖 主要功能

- 后台管理系统,可对用户,Token,商品,卡密等进行管理
- 精心设计的 UI，响应式设计
- 极快的首屏加载速度（~100kb）
- 支持Midjourney绘画和DALL·E模型绘画,GPT4等应用
- 海量的内置 prompt 列表，来自[中文](https://github.com/PlexPt/awesome-chatgpt-prompts-zh)和[英文](https://github.com/f/awesome-chatgpt-prompts)
- 一键导出聊天记录，完整的 Markdown 支持


## 🎮 开始使用
**Node 环境**

`node` 需要 `^16 || ^18 || ^19` 版本（node >= 16.19.0），可以使用 nvm 管理本地多个 node 版本。

```
# 查看 node 版本
node -v

# 查看 npm 版本
npm -v

# 查看 yarn 版本
yarn -v

```

**1.先 `Fork` 本项目，然后克隆到本地。**
```
git clone https://github.com/ctxgo/chatgpt-web-go.git
```

**2.安装依赖**
```
yarn install
```

**3.运行**
```
# web项目启动
yarn dev:web
```

**4.打包**
```
yarn build
```

## ⛺️ 环境变量

> 如果是前后端分离模式部署项目则需要填以下配置

#### `VITE_APP_REQUEST_HOST` 

请求服务端的`Host`地址。

## 🚧 开发
#### 本地开发

1. 安装 nodejs 和 yarn具体细节请询问 ChatGPT
2. 执行 `yarn install` 即可
3. web项目开发 `yarn dev:web`
4. 服务端项目开发 `yarn dev`
5. 打包项目 `yarn build`

## 🎯 部署
> 直接将`WEB`项目打包好的 `dist` 目录上传到服务器即可。注意服务器IP地址位置！

## 💰 赞助方
<a href='https://www.asiayun.com/aff/BMLOQGTD' target='_blank'>
<img width='50%' style="border-radius: 12px;"  src='https://imgcache.yyyisp.com/img/asiaxcimg.png' />
</a>


## 🧘 贡献者

[见项目贡献者列表](https://github.com/79E/ChatGPT-Web/graphs/contributors)

## 📋 开源协议

[![License MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://github.com/79E/ChatGpt-Web/blob/master/license)
