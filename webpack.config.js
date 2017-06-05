var webpack = require('webpack');

module.exports = {
  //页面入口文件配置
  entry: {
    index : './js/index.js'
  },
  //入口文件输出配置
  output: {
    path: __dirname,
    filename: 'js/bundle.js'
  },
  devServer: {
    host: '0.0.0.0',
    port: 9091,
    contentBase: '.',
  },
  module: {
    //加载器配置
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
    ]
  },
  //其它解决方案配置
  resolve: {
  }
};