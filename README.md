# SBTI Personality Test

`sbti-clone` 是一个面向中文与多语言传播场景的 SBTI 人格测试项目，包含前台测评体验、排行榜、统计接口与管理员后台。

## 目录

- `index.html`: 页面结构
- `global.html`: 多语言挑战入口页
- `main.css`: 页面样式
- `main.js`: 题库、评分逻辑、结果类型和内嵌结果图片
- `main-[lang].js`: 各语言版本的本地化题库与结果文案脚本
- `stats.js`: 前端统计展示与上报逻辑
- `server.py`: 提供静态文件与统计 API 的服务端入口
- `schema.sql`: 独立的 MySQL 表结构初始化文件
- `bootstrap_db.py`: 建库、建用户、授权、导入表结构的初始化脚本
- `requirements.txt`: 服务端依赖

## 技术架构要求

如果你要运行当前这套带统计接口、排行榜和管理员后台的动态版本，`MySQL` 是技术架构需求，不是可选依赖。

动态版本依赖：

- Python 3
- MySQL 8.x 或兼容的 MySQL/MariaDB
- `mysql-connector-python`

如果没有 MySQL，只能运行纯静态页面，不能启用：

- 首页累计人数
- 结果页人格人数
- 排行榜数据接口
- 管理员后台统计

## 数据库初始化

### 方式一：推荐，直接用 `bootstrap_db.py`

这个脚本会做四件事：

- 创建数据库
- 创建应用用户
- 授权应用用户
- 导入 `schema.sql`

示例：

```bash
pip install -r requirements.txt

MYSQL_ADMIN_HOST=127.0.0.1 \
MYSQL_ADMIN_PORT=3306 \
MYSQL_ADMIN_USER=root \
MYSQL_ADMIN_PASSWORD=your_root_password \
SBTI_DB_NAME=sbti \
SBTI_DB_USER=sbti \
SBTI_DB_PASSWORD=your_app_password \
SBTI_DB_APP_HOST=127.0.0.1 \
python3 bootstrap_db.py
```

### 方式二：手动初始化

先建库、建用户、授权：

```sql
CREATE DATABASE IF NOT EXISTS sbti CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER IF NOT EXISTS 'sbti'@'127.0.0.1' IDENTIFIED BY 'your_app_password';
ALTER USER 'sbti'@'127.0.0.1' IDENTIFIED BY 'your_app_password';
GRANT ALL PRIVILEGES ON sbti.* TO 'sbti'@'127.0.0.1';
FLUSH PRIVILEGES;
```

再导入表结构：

```bash
mysql -h 127.0.0.1 -P 3306 -u sbti -p sbti < schema.sql
```

## 本地运行

### 启动动态服务

在数据库初始化完成后，执行：

```bash
pip install -r requirements.txt

SBTI_DB_HOST=127.0.0.1 \
SBTI_DB_PORT=3306 \
SBTI_DB_USER=sbti \
SBTI_DB_PASSWORD=your_app_password \
SBTI_DB_NAME=sbti \
python3 server.py
```

如果要启用管理员后台，再额外提供：

```bash
SBTI_ADMIN_USER=admin \
SBTI_ADMIN_PASSWORD=your_admin_password
```

例如：

```bash
SBTI_DB_HOST=127.0.0.1 \
SBTI_DB_PORT=3306 \
SBTI_DB_USER=sbti \
SBTI_DB_PASSWORD=your_app_password \
SBTI_DB_NAME=sbti \
SBTI_ADMIN_USER=admin \
SBTI_ADMIN_PASSWORD=your_admin_password \
python3 server.py
```

然后打开：

`http://127.0.0.1:4180`

管理员后台：

`http://127.0.0.1:4180/admin`

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
- 新增了测评统计能力：首页显示累计完成人数，结果页显示该人格已获得人数。
- 新增了服务端统计接口与 MySQL 持久化支持，所有 `TYPE_LIBRARY` 数量之和等于成功完成测评总人数。
- `server.py` 启动时会自动执行 `CREATE TABLE IF NOT EXISTS ...`，也就是在数据库和账号已存在的前提下，可以自动建表。
- `schema.sql` 是显式可交付的表结构文件，适合给第三方部署、审计、手动导入。
- `bootstrap_db.py` 是显式可交付的数据库引导脚本，适合首次部署时直接完成建库和导表。
- `MySQL` 是当前动态统计架构的技术需求，服务端启动、排行榜、管理员后台统计都依赖数据库能力；如果没有 MySQL，只能运行纯静态页面，不能启用这套动态统计功能。
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
