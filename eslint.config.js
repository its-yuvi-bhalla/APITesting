import cypress from 'eslint-plugin-cypress'

export default [
  {
    files: ['cypress/**/*.js', 'cypress/**/*.ts'], // adjust path if needed
    plugins: {
      cypress,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: cypress.environments.globals.globals, 
    },
    rules: {
    'no-unused-expressions': 0,
    'chai-friendly/no-unused-expressions': 2
    },
  },
]
