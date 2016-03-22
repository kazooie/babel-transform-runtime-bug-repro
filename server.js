var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath
  })
  .listen(3000, null, function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Running at http://localhost:3000');
  });
