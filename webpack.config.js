const { resolve } = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssWebpackPlugin = require('mini-css-extract-plugin');

const dist = resolve(__dirname, 'dist');

/** @type {import('webpack/declarations/WebpackOptions'.WebpackOptions)} */
module.exports = {
  watch: true,
  // entry: './src/app.js',
  entry: {
    app: './src/app.js',
  },
  plugins: [
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new MiniCssWebpackPlugin({
      filename: 'css/style.css',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: dist,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [{ loader: MiniCssWebpackPlugin.loader }, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: MiniCssWebpackPlugin.loader },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    contentBase: dist,
  },
};
