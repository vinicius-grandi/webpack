const glob = require('glob');
const PurgeCss = require('purgecss-webpack-plugin');
const commonConfig = require('./webpack.common');

const config = {
  ...commonConfig,
  mode: 'production',
  plugins: [
    ...commonConfig.plugins,
    new PurgeCss({
      paths: glob.sync('./**/*.html', {
        nodir: true,
      }),
    }),
  ],
};

module.exports = config;
