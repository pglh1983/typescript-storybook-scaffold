module.exports = {
  extends: ['airbnb-typescript'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
    'import/extensions': 'off'
  },
  overrides: [
    {
      files: ['**/*.spec.ts', '**/*.spec.tsx'],
      env: {
        jest: true
      }
    }
  ]
};
