const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
// const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
// const Dotenv = require('dotenv-webpack');

module.exports = {
  name: "client",
  entry: {
    "react-app-setup": path.resolve(__dirname, "..", "./src/index.tsx"),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    mainFields: ["source", "module", "main"],
    modules: [path.resolve("node_modules")],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@constants": path.resolve(__dirname, "src/constants"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "[name]_[fullhash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "..", "./public/index.html"),
      // favicon: path.resolve(__dirname, '..', './public/images/favicon.png'),
      showErrors: true,
    }),
    // new WebpackManifestPlugin({
    //   writeToFileEmit: true,
    // }),
    new ForkTsCheckerWebpackPlugin(),
    // new Dotenv({
    //   path: '.env',
    // }),
  ],
  stats: "errors-only",
};
