const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./app/src/index.js",
    output: {
        path: path.resolve(__dirname, "app/dist"),
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),
        new HtmlWebpackPlugin({
            template: './app/src/index.html',
            filename: 'index.html'
        })
    ],
    devServer: {
        static: path.resolve(__dirname, "app/dist/"),
        compress: true,
        port: 8080,
        hot: true, 
        open: true
    },
    devtool: "source-map"
};
