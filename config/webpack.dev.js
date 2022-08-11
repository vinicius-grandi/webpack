const commonConfig = require('./webpack.common');

const config = {
  ...commonConfig,
  mode: 'development',
};

module.exports = config;
