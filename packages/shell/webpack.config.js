require('dotenv').config();
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { type } = require('os');

module.exports = (env) => {
  return {
    mode: env.WEBPACK_SERVE ? "development" : "production",
    entry: { shell: "./index.js" },
    devServer: {
      static: "./dist",
      historyApiFallback: true,
    },
    output: {
      clean: true,
      publicPath: "/",
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({ template: "./shell.html" }),
    ],
  };
};
