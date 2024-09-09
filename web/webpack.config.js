const path = require('path');

module.exports = {
  mode:'development',
  devtool: 'inline-source-map',
  entry: './websrc/entry.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '../server/wwwroot/js'),
  },

  module: {
    rules: [{ test: /\.js$/, use: path.resolve('./badelloader.js') }]

  }
};