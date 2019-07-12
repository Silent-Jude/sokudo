const gulp = require('gulp')

// 转译JavaScript
gulp.task('webpack',() => {
  // 引入webpack，在gulp中webpack是webpack-stream
  const webpack = require('webpack-stream')
  const config = require('./webpack.config.js')
  // 源文件是当前目录下的js目录下的所有js文件
  gulp.src('./js/**/*.js')
      //把它输送给webpack
      .pipe(webpack())
      //再把结果保存到下列位置。
      .pipe(gulp.dest('../www/js'))

})

// 编译less->css
gulp.task('less',() => {
  // 引入less，在gulp下时gulp-less
  const less = require('gulp-less')
  // 源文件是当前目录下的less目录下的所有less文件
  gulp.src('./less/**/*.less')
      .pipe(less())
      .pipe(gulp.dest('../www/css'))
})
// gulp启动的默认任务，依赖任务列表。
gulp.task('default',['webpack', 'less'])
