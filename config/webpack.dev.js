const commonConfig = require('./webpack.common');

/** @type {import('webpack/declarations/WebpackOptions'.WebpackOptions)} */
const config = {
  ...commonConfig,
  mode: 'development',
};

module.exports = config;
