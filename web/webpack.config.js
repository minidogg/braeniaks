const path = require('path');

module.exports = {
  mode:'development',
  devtool: 'inline-source-map',
  entry: './js-src/entry.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './web-src/js/'),
  },

  module: {
    rules: [{ test: /\.js$/, use: path.resolve('./badelloader.js') }]

  }
};