module.exports = {
  entry:{
    index: './js/index'
  },
  output:{
    // 因为gulp中已经指定了，所以这里只需要配置的文件名是entry的name.js
    // 使用入口名称。详见 https://www.webpackjs.com/configuration/output/#output-filename
    filename:'[name].js'
  },
  // 需要source-map
  devtool: 'source-map',
  resolve: {
    // 主要是处理js文件
    extensions: ['.js']
  },
  module: {
    loader: [
      {
        test: /\.js$/,
        loader: 'babel',
        // 排除的文件。
        exclude: 'node_modules',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }

}