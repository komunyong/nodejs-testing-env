module.exports = {
  entry: './index.js',
  output: {
    path: './dist',
    filename: 'app.bundle.js'
  },

  // correct
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  }
};
