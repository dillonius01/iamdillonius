'use strict';

const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './app/root.jsx',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  mode: 'none',
  context: __dirname,
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015'],
        }
      },
      {
        test: /\.scss$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
      }
    ]
  },
  devServer: {
    port: 8080,
    contentBase: path.join(__dirname),
    hot: true,
    inline: true,
    watchOptions: {
      ignored: [
        path.join(__dirname, 'node_modules'),
      ]
    }
  }
};
