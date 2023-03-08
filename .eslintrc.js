module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard',
    'eslint:recommended',
    'plugin:pug/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    'pug'
  ],
  rules: {
    semi: ['error', 'always'],
    curly: ['error', 'multi-line'],
    quotes: ['warn', 'single'],
    indent: ['warn', 2],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-multiple-empty-lines': ['warn', { max: 1, maxEOF: 1 }],
    'no-multi-spaces': ['warn', {
      ignoreEOLComments: true,
      exceptions: { VariableDeclarator: true, Property: true }
    }],
    'comma-dangle': ['error', { arrays: 'never', objects: 'never', imports: 'never' }],
    'comma-spacing': ['warn', { before: false, after: true }],
    'key-spacing': ['warn', { beforeColon: false, afterColon: true }],
    'arrow-spacing': ['warn', { before: true, after: true }],
    'vue/html-indent': ['warn', 2, { alignAttributesVertically: true }],
    'vue/multi-word-component-names': ['warn', { ignores: [] }],
    'space-infix-ops': ['warn']
  }
};