const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: { main: "./src/js/index.js" },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {test: /\.css$/,
      exclude: /(node_modules|bower_components)/,
      use: ['style-loader',MiniCssExtractPlugin.loader, 'css-loader','postcss-loader']
      },
    ]
  },
  plugins:[
    new MiniCssExtractPlugin({filename: 'style.css'}),
    new HtmlWebpackPlugin({template:"./src/html/index.html"})
  ],
};
