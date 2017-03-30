var externalModules = require('./externalModules.json');

var externals = {};
externalModules.forEach((m) => externals[m] = 'commonjs ' + m);

module.exports = {
  entry: './index.js',
  output: {
    path: './dist',
    filename: 'app.bundle.js'
  },
  target: 'node',
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },
  externals,
};
