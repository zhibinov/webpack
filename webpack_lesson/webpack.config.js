const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: "./js/main.js",
    output: {
        path: resolve(__dirname, "build"),
        filename: "build/main.[contenthash].js"
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.mp3$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'audio',
                },
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        }),
    ]
}