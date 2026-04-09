# SBTI Clone

`sbti-clone` 是对 `https://sbti.fancc.de5.net` 的本地复刻版本。

## 目录

- `index.html`: 页面结构
- `global.html`: 多语言挑战入口页
- `main.css`: 页面样式
- `main.js`: 题库、评分逻辑、结果类型和内嵌结果图片
- `main-[lang].js`: 各语言版本的本地化题库与结果文案脚本

## 本地运行

在项目目录执行：

```bash
python3 -m http.server 4180
```

然后打开：

`http://127.0.0.1:4180`

多语言挑战入口：

`http://127.0.0.1:4180/global.html`

英文版入口：

`http://127.0.0.1:4180/en.html`

日文版入口：

`http://127.0.0.1:4180/ja.html`

韩文版入口：

`http://127.0.0.1:4180/ko.html`

法文版入口：

`http://127.0.0.1:4180/fr.html`

德文版入口：

`http://127.0.0.1:4180/de.html`

意大利文版入口：

`http://127.0.0.1:4180/it.html`

繁體中文版入口：

`http://127.0.0.1:4180/zh-hant.html`

孟加拉文版入口：

`http://127.0.0.1:4180/bn.html`

俄文版入口：

`http://127.0.0.1:4180/ru.html`

葡萄牙文版入口：

`http://127.0.0.1:4180/pt.html`

印地语版入口：

`http://127.0.0.1:4180/hi.html`

## 说明

- 已去除线上站点的 Cloudflare 注入脚本，避免本地运行报错。
- 题目、结果逻辑和结果海报图片已保留在 `main.js` 中。
- 新增了多语言挑战入口页：`global.html`，可统一跳转到各语言版本。
- 首页新增了 `Global Mode` 入口按钮，桌面端与手机端都做了单独样式适配。
- 新增了面向欧美市场本地化改写的英文版页面与脚本：`en.html`、`main-en.js`。
- 新增了面向日本市场本地化改写的日文版页面与脚本：`ja.html`、`main-ja.js`。
- 新增了面向韩国市场本地化改写的韩文版页面与脚本：`ko.html`、`main-ko.js`。
- 新增了面向法国市场本地化改写的法文版页面与脚本：`fr.html`、`main-fr.js`。
- 新增了面向德国市场本地化改写的德文版页面与脚本：`de.html`、`main-de.js`。
- 新增了面向意大利市场本地化改写的意大利文页面与脚本：`it.html`、`main-it.js`。
- 新增了面向香港、台湾市场本地化改写的繁体中文版页面与脚本：`zh-hant.html`、`main-zh-hant.js`。
- 新增了面向孟加拉市场本地化改写的孟加拉文页面与脚本：`bn.html`、`main-bn.js`。
- 新增了面向俄罗斯市场本地化改写的俄文页面与脚本：`ru.html`、`main-ru.js`。
- 新增了面向葡萄牙市场本地化改写的葡萄牙文页面与脚本：`pt.html`、`main-pt.js`。
- 新增了面向印度市场本地化改写的印地语页面与脚本：`hi.html`、`main-hi.js`。
