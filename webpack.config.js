const path = require("path");

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
//const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: { index: "./src/index.js" },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].bundle.js",
        assetModuleFilename: 'images/[name][ext][query]',
        clean: true,
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        port: 9000,
        hot: true,
        liveReload: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        // new CopyPlugin({
        //     patterns: [{ from: "src/assets/image", to: "./image" }],
        // }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: {
            //         loader: 'url-loader',
            //       },

            // },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset/resource'
              },
            {
                test: /\.(html)$/,
                use: ["html-loader"],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-transform-runtime",
                        ],
                    },
                },
            },
        ],
    },
};
