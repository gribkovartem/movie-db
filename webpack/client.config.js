const path = require('path');

module.exports = {
  extends: path.resolve(__dirname, './common.config.js'),
  target: 'web',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'bundle.js',
  },
};
