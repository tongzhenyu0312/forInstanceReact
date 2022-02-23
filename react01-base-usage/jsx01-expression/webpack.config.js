const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new HtmlPlugin({template: '../public/index.html'}),
  ],
}