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
            const key = `process.env.${next}`;
            return {
                ...prev,
                key: JSON.stringify(envies[next])
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
                ui: path.resolve(__dirname, "./src/ui/"),
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
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html"
            }),
            new webpack.DefinePlugin(enviesKeys),
            new ForkTsCheckerWebpackPlugin({
                eslint: {
                    files: "./src/**/*.{ts,tsx,js,jsx}"
                }
            })
        ]
    };
};
