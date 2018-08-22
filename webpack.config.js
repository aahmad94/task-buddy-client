var path = require("path");
var webpack = require("webpack");

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: [/\.jsx?$/, /\.js?$/],
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
