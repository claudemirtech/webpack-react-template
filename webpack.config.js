const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './frontend/src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    target: 'web', // Set target to 'web' for the frontend
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.svg/,
                use: "@svgr/webpack",
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico|json)$/i,
                loader: 'file-loader',
                options: {
                    name: './public/[name].[ext]'
                }
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './frontend/public/index.html',
        }),
        new CopyPlugin({
            patterns: [
                { from: "./frontend/public", to: "public" },
        ]}),
    ],
    devServer: {
        historyApiFallback: true,
        static: {
            directory: path.join(__dirname, './frontend/public'),
        },
    },
};