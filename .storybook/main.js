// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const tsTransformPaths = require('@zerollup/ts-transform-paths');

module.exports = {
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register'
  ],
  stories: ['../src/**/*.stories.tsx'],
  webpackFinal: async config => {
    config.resolve = {
      extensions: [],
      plugins: [],
      ...config.resolve
    };
    config.module.rules.push({
      // exclude: /node_modules/,
      test: /\.(ts|tsx)$/,
      loader: 'ts-loader',
      options: {
        getCustomTransformers: (program) => {
          const transformer = tsTransformPaths(program);

          return {
            before: [transformer.before], // for updating paths in generated code
            afterDeclarations: [transformer.afterDeclarations] // for updating paths in declaration files
          };
        }
      },
      // use: [
      //   {
      //     loader: require.resolve('ts-loader'),
      //   },
      // ],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    // config.resolve.plugins.push(new TsconfigPathsPlugin());
    return config;
  },
};
