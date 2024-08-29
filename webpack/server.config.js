const path = require('path');
const externals = require('webpack-node-externals');

module.exports = {
  extends: path.resolve(__dirname, './common.config.js'),
  target: 'node',
  entry: './src/server.jsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server.js',
  },
  externals: [externals()],
};
