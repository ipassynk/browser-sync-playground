'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var proxyMiddleware = require('http-proxy-middleware');

function browserSyncInit() {
  var server = {
    baseDir: 'src'
  };

  server.middleware = proxyMiddleware('/products', 
  {target:'http://localhost:3000',
     logLevel: 'debug'
    });

  browserSync.instance = browserSync.init({
    startPath: 'index.html',
    server: server,
    port: 3005,
    files: "src/*"
  });
}

gulp.task('serve', [], function () {
  browserSyncInit();
});
