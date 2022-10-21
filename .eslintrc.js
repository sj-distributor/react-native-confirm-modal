module.exports = {
  root: true,
  env: {
    node: true,
    es2021: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  plugins: ['react'],
  rules: {
    'no-undef': 'off',
    'comma-dangle': 'off',
    'no-unused-vars': 'off',
    'spaced-comment': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-native/no-inline-styles': 'off',
    '@typescript-eslint/no-unused-vars': ['off'],
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks:
          '(useMyCustomHook|useMyOtherCustomHook|useRecoilCallback)',
      },
    ],
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
  },
  settings: {
    react: {
      paragma: 'React',
      version: 'detect',
    },
  },
};
