const path = require('path');
const externals = require('webpack-node-externals');

module.exports = {
  extends: path.resolve(__dirname, '../webpack/common.config.js'),
  target: 'node',
  entry: './src/server.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server.js',
  },
  externals: [externals()],
};
