const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: "./client/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'build'),
    },
    module: {
        rules: [
            {
                test: /\jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        publicPath: path.join('/build/'),
    },
};