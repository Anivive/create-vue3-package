module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'eslint-config-airbnb-base',
    '@vue/typescript'
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-plusplus': 'off',
    'comma-dangle': 'off',
    'brace-style': 'off',
    'class-methods-use-this': 'off',
    'no-bitwise': 'off',
    'no-param-reassign': 'off',
    'max-classes-per-file': ['error', 100],
    'max-len': [2, 120, 2, {
      ignoreUrls: true,
      ignoreComments: false
    }],
    'object-shorthand': ['error', 'methods'],
    'no-underscore-dangle': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      ts: 'never',
    }],
    'no-extra-semi': 'off',
    semi: 'off',
    '@typescript-eslint/semi': ['error'],
    'import/no-dynamic-require': 'off'
  },
  settings: {
    'import/resolver': {
      alias: [
        ['@', './src']
      ],
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  ignorePatterns: ['*.test.*', '*.spec.*']
};
