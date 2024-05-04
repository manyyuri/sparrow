module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    // 这里增加一行，用于支持后面的测试环境
    jest: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 15,
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 0,
  },
};
