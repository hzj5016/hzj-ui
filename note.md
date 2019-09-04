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

## 自动化测试

- Karma: 一个测试运行器, 它可以换起浏览器, 加载测试脚本, 运行测试用例
- Mocha: 一个单元测试框架, 它可以用来写测试用例
- Sinon: 一个spy, mock库, 可以辅助测试

安装: `npm i -D karma karma-chrome-launcher karma-mocha karma-sinon-chai mocha sinon sinon-chai karma-chai karma-chai-spies`