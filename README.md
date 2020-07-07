[![LICENSE](https://img.shields.io/badge/license-Anti%20996-blue.svg)](https://github.com/996icu/996.ICU/blob/master/LICENSE)

# cz-customizable-i18n-config

## 使用配置

#### 1. 安装

```shell
npm i commitizen cz-customizable cz-customizable-i18n-config --save--dev
```

#### 2.配置

项目根目录新建`.czrc` 配置 commitizen path 为 cz-customizable

```
{
  "path": "cz-customizable"
}
```

项目根目录新建`.cz-config.js` 需要自定义可通过覆盖此 config

```js
const config = require('cz-customizable-i18n-config')

module.exports = config
```
