# nba-scoreboard-backend

`DustinJiang/D2308MainPageCode`项目的子项目

作为`DustinJiang/D2308MainPageCode/tools/nba-score`爬取NBA比分的后端实现 部署在Vercel

## Deployment

通过`vercel.json`进行自动部署

## APIs

### 获取当日成绩

GET `/score/today`

返回 `JSON`

### 获取明日比赛

GET `/score/next`

返回 `JSON`

### 获取昨日成绩

GET `/score/previous`

返回 `JSON`

## Cache

实例化了`DataStorage`类进行数据获取和缓存

默认缓存时间为`180s`防止流量过高

## To-do

- [ ] 按队伍获取

- [ ] 获取球员数据