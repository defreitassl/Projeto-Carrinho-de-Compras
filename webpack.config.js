const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    devServer: {
        static: {
          directory: path.resolve(__dirname, './app/dist')
        },
        compress: true,
        port: 8080
    },
    entry: {
        index: "./app/src/index.js"
    },
    output: {
        path: path.resolve(__dirname, "./app/dist"),
        filename: "bundle.js"
    },
    mode: "production",
    module: {
        rules:[
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader, 'css-loader']
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
        })
    ],
    devtool: "source-map"
}