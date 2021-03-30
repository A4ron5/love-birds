const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const dotenv = require("dotenv");

module.exports = () => {
  const envies = dotenv.config().parsed;

  const enviesKeys =
    envies &&
    Object.keys(envies).reduce((prev, next) => {
      return {
        ...prev,
        [next]: envies[next]
      };
    }, {});

  return {
    entry: "./src/index.tsx",
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      alias: {
        features: path.resolve(__dirname, "./src/features/"),
        api: path.resolve(__dirname, "./src/api/"),
        lib: path.resolve(__dirname, "./src/lib/"),
        pages: path.resolve(__dirname, "./src/pages/"),
        ui: path.resolve(__dirname, "./src/ui/")
      }
    },
    output: {
      path: path.join(__dirname, "/dist"),
      filename: "build.js"
    },
    devServer: {
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "babel-loader",
          exclude: /(dist|node_modules)/
        },
        {
          test: /\.(png|jpe?g|gif|ttf)$/i,
          loader: "file-loader"
        },
        {
          test: /\.svg$/,
          use: ["@svgr/webpack"]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html"
      }),
      new webpack.DefinePlugin({
        "process.env": JSON.stringify(enviesKeys)
      }),
      new ForkTsCheckerWebpackPlugin({
        eslint: {
          files: "./src/**/*.{ts,tsx,js,jsx}"
        }
      })
    ]
  };
};
