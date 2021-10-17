module.exports = {
  extends: 'eslint:recommended',
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module', //指定源代码存在的位置，script | module，默认为script。
  },
  rules: { semi: 2 },
}
