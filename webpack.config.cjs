const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  output: { clean: true, publicPath: 'auto' },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.png$/, type: 'asset/resource' },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
