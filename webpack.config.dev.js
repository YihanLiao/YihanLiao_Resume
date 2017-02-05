// webpack.config.dev.js
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/index',
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Resume',
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-2', 'react'],
        },
      },
      {
        test: /\.(eot|woff|woff2|svg|ttf|json)([\?]?.*)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
        query: { mimetype: ['image/png', 'image/jpeg'] },
      },
    ],
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
};
