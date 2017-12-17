const webpack = require('webpack');

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    path: `${__dirname}/build`,
    publicPath: '/build/',
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {
        test: /\.svg/,
        use: {
          loader: 'svg-url-loader',
          options: {noquotes: true}
        }
      },
      {
        test: /\.css$/,
        use: [
          {'loader': 'style-loader'},
          {
            'loader': 'css-loader',
            'options': {
              minimize: true
            }
          }
        ]
      }
    ]
  },

  plugins: process.argv.indexOf('-p') === -1 ? [] : [
    new webpack.optimize.UglifyJsPlugin(
      {
        output: {
          comments: false,
        },
      }),
  ],
};
