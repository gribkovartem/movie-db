const path = require('path');

const common = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(?:jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

const serverConfig = {
  ...common,
  target: 'node',
  entry: './src/server.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
  },
};

const clientConfig = {
  ...common,
  target: 'web',
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};

module.exports = [serverConfig, clientConfig];