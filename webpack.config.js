var path = require('path');
var webpack = require('webpack');

// this config can be in webpack.config.js or other file with constants
var API_URL = {
  production: JSON.stringify('prod-url'),
  development: JSON.stringify('dev-url')
};

module.exports = function(env) {
  // check environment mode
  var environment = env === 'production' ? 'production' : 'development';
  return {
    entry: './app/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    plugins: [
      new webpack.DefinePlugin({
        'API_URL': API_URL[environment]
      })
    ],
  };
}

