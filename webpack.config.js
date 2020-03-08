const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.jsx',
    sw: './src/serviceWorker.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          plugins: ['lodash'],
          presets: [['@babel/env', { 'targets': { 'node': 6 } }]]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }],

  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new CopyPlugin([
      { from: 'public', to: '' },
    ])
  ],
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    proxy: {
      "/api/**": {
        target: "http://localhost:3001",
        pathRewrite: { '^/api': '' },
      }
    }
  }
};
