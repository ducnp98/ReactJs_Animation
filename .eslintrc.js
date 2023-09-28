const fs = require('fs')
const path = require('path')

const prettierOptions = JSON.parse(fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'))

module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', 'react', 'simple-import-sort', 'prettier'],
  settings: {
    react: {
      pragma: 'React',
      version: '18.0',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', './'],
      },
    },
  },
  extends: ['react-app', 'react-app/jest', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-console': 'warn',
    'no-eval': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Packages `react` related packages come first.
          ['^react', '^@?w'],
          // Internal packages.
          ['^(@|src)(/.*|$)'],
          // Side effect imports.
          ['^u0000'],
          // Parent imports. Put `..` last.
          ['^..(?!/?$)', '^../?$'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^./(?=.*/)(?!/?$)', '^.(?!/?$)', '^./?$'],
          // Style imports.
          ['^.+.?(css)$'],
        ],
      },
    ],
    'prettier/prettier': ['warn', prettierOptions],
  },
}
