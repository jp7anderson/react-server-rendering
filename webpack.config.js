module.exports = {
  entry: './client.js',
  output: {
    filename: 'bundle.js',
    path: 'public'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exlude: '/node_modules',
        loader: 'babel-loader',
        query: {
          presets: ['react']
        }
      }
    ]
  }
};
