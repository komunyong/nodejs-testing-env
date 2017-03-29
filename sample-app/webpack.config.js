module.exports = {
  target: 'node',
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  }
};
