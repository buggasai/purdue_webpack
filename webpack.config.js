"use strict";

const debug = process.env.NODE_ENV !== "production";

const webpack = require("webpack");
const path = require("path");

module.exports = {
  devtool: debug ? "inline-sourcemap" : null,
  entry: path.join(__dirname, "src", "app-client.js"),
  devServer: {
    inline: true,
    port: 3333,
    contentBase: "src/static/",
    historyApiFallback: {
      index: "/index-static.html"
    }
  },
  output: {
    path: path.join(__dirname, "src", "static", "js"),
    publicPath: "/js/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: path.join(__dirname, "src"),
        loader: ["babel-loader"],
        query: {
          cacheDirectory: "babel_cache",
          presets: debug
            ? ["react", "es2015", "react-hmre"]
            : ["react", "es2015"]
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.(gif|png|jpg|cur)$/,
        loader: "file-loader"
      },
      {
        test: /\.svg$/,
        loader:
          "url?limit=65000&mimetype=image/svg+xml&name=public/fonts/[name].[ext]"
      },
      {
        test: /\.woff$/,
        loader:
          "url?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]"
      },
      {
        test: /\.woff2$/,
        loader:
          "url?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]"
      },
      {
        test: /\.[ot]tf$/,
        loader:
          "url?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]"
      },
      {
        test: /\.eot$/,
        loader:
          "url?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]"
      }
    ]
  },
  plugins: debug
    ? []
    : [
        new webpack.DefinePlugin({
          "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false },
          mangle: true,
          sourcemap: false,
          beautify: false,
          dead_code: true
        })
      ]
};
