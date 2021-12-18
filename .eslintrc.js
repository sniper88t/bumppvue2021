
module.exports = {
    root: true,
    parser: "vue-eslint-parser",
    env: {
      browser: true,
      node: true,
      es6: true,
    },
    parserOptions: {
        sourceType: 'module',
        parser: 'babel-eslint',
        ecmaVersion: 6
    },
    rules: {
        'no-console': 'off',
    },
};