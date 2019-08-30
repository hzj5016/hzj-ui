# parcel

1. 安装 parcel
2. 控制台运行: `./node_modules/.bin/parcel index.html`

> 注意, parcel 要使用 vue时, 需要安装 rutime + compier 版本, 在 package.json下添加如下代码:
```json
"alias": {
    "vue": "./node_modules/vue/dist/vue.common.js"
  }
```
3. 再次运行: `./node_modules/.bin/parcel --no-cache index.html`