module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: ['airbnb'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'import/no-unresolved': 'off',
  },
};
