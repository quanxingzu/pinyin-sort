const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "index.js",
    libraryTarget: "umd",
    environment: {
      arrowFunction: false, //是否显示箭头函数
    },
  },
  //   optimization: {
  //     minimize: false,//是否压缩
  //   },
  plugins: [],
};
