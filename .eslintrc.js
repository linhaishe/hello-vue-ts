module.exports = {
  extends: ['eslint:recommended', '@vue/typescript/recommended'],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module', //指定源代码存在的位置，script | module，默认为script。
  },
  //"@typescript-eslint/no-inferrable-types": "off" // 关闭类型推断
  rules: { semi: 1, '@typescript-eslint/no-inferrable-types': 'off' },
};
