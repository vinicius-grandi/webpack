const { resolve } = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssWebpackPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const dist = resolve(
  process.cwd(),
  'dist',
);

/** @type {import('webpack/declarations/WebpackOptions'.WebpackOptions)} */
const config = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 1,
    },
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
  // entry: './src/app.js',
  entry: {
    index: './src/index.js',
    hello: './src/hello.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ESLintPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new MiniCssWebpackPlugin({
      filename: 'css/[contenthash].style.css',
    }),
  ],
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: dist,
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: [
                      'last 2 versions',
                      'ie 11',
                    ],
                  },
                },
              ],
            ],
          },
        },
      },
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
    watchOptions: {
      poll: true,
    },
  },
};

module.exports = config;
