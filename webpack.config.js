const { resolve } = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');

/** @type {import('webpack/declarations/WebpackOptions'.WebpackOptions)} */
module.exports = {
  watch: true,
  entry: './src/app.js',
  plugins: [new ESLintPlugin()],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist'),
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};
