# Peter's TypeScript Storybook Scaffold

This repository integrates a bunch of stuff I'm probably going to need for a Storybook one day. It includes:

This is a scaffold of a generic Storybook written in TypeScript. I don't like repeating myself so I've extracted the hours of getting a Storybook configuration *just so* into its own repo. This contains:

* TypeScript
* React, React DOM
* Storybook, with story files at `**/*.stories.tsx`
* `styled-components` rather than `emotion`, for its built-in `ThemeProvider`
* Bare bones of a theming set-up: I've tried to make it so you can type-check theme variables
  and you don't have to type `${(props : any) => props.theme.my.themevar}` every time, instead
  you import a file so you can have `${theme.my.var}` return a function
* Linting with ESLint and `airbnb-typescript`
* `husky` to enforce the linter on pre-commit hooks
* Testing with Jest and `ts-jest`, with test files at `**/*.spec.js`, `**/*.spec.jsx`
* Path aliases set up in `tsconfig.json`, and to transform them:
  * for export: `ttypescript` and `@zerollup/ts-transform-paths`
  * for Storybook: The `@zerollup/ts-transform-paths` Webpack plugin for Storybook
  * for testing: correct `ts-jest` config
* `.editorconfig` setup
* No `prop-types` - use TypeScript interfaces
* No Yarn, yet. I'm thinking about it.

The intention of my configuration is to keep the components super modular and independent, so that the component, styles, stories and tests can be kept in one directory, for example:

    src/
      components/
        atoms/
          Button/
            index.ts // Just re-exports Button.tsx
            Button.tsx
            Button.spec.tsx
            Button.stories.tsx
            Button.style.ts
          Input/
            ...
        molecules/
          ...

## Todos

* Make it so you can do partial imports, e.g. `import MyComponent from 'repo/MyComponent';`
* Unit tests for utils

## Installation

This project is not available as an NPM module because it is intended to be used as a starting point for a React project, rather than a dependency. To use this project, clone or download this git repo and start making changes!

All that is required to install the dependencies is:

    npm ci

## How to run

### Styleguide

You can run the styleguide on localhost port 9001 with:

    npm run styleguide

To build the styleguide statically into `output/styleguide` run:

    npm run build:styleguide

### Testing

To run the test suite:

    npm run test

### Linting

To run a linting report:

    npm run lint

To have the linter fix linting errors where possible:

    npm run lint:fix

### Build for export

To transpile the TypeScript files into ES5 for export at `output/dist`, run:

    npm run build

You can trash the output directories with:

    npm run build:clean

## Contact

For any questions or comments please contact me via GitHub.
