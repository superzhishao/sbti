# SBTI Clone

`sbti-clone` 是对 `https://sbti.fancc.de5.net` 的本地复刻版本。

## 目录

- `index.html`: 页面结构
- `main.css`: 页面样式
- `main.js`: 题库、评分逻辑、结果类型和内嵌结果图片

## 本地运行

在项目目录执行：

```bash
python3 -m http.server 4180
```

然后打开：

`http://127.0.0.1:4180`

## 说明

- 已去除线上站点的 Cloudflare 注入脚本，避免本地运行报错。
- 题目、结果逻辑和结果海报图片已保留在 `main.js` 中。
