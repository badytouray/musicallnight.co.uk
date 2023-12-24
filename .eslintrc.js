module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ['react-app', 'airbnb', 'plugin:prettier/recommended'],
  rules: {
    'import/prefer-default-export': 'off',
    'react/no-danger': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'import/order': [
      'error',
      { alphabetize: { order: 'asc', caseInsensitive: true }, 'newlines-between': 'never' },
    ],
    'sort-imports': [
      'error',
      { ignoreCase: true, ignoreDeclarationSort: true, ignoreMemberSort: false },
    ],
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
}
