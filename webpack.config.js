const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
      bundle:  __dirname + '/src/app.js'
    },
    output: {
      path: __dirname,
      filename: './resources/bundle.js'
    },
    module: {
      loaders: [
        {
          loader: 'babel-loader',
          exclude: /node_modules/,
          test: /\.js[x]?$/,
          query: {
            cacheDirectory: true,
            presets: ['env'],
            plugins: [
              [
                'transform-react-jsx',
                {
                  'pragma' : 'h'
                }
              ]
            ]
          }
        }
      ]
    },
    devServer: {
      contentBase: path.resolve(__dirname, '.'),
      host : '0.0.0.0',
      port: 8080,
    },
    devtool: 'source-map'
};
