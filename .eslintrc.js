module.exports = {
  env: {
    browser: true,
    es6: true,
    jquery: true
  },
  extends: [
    'airbnb-base',
  ],
  'import/resolver': {
    node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'SRC'],
    },
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'class-methods-use-this': 0,
    'no-new': 0,
    'no-underscore-dangle': 0
  },
};