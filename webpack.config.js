var webpack = require('webpack');
var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'build');

var config = {
    entry: APP_DIR,
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        library: ["CTM"],
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/, /\*\*\/\*\.test\.js/],
                loader: 'babel-loader'
            }
        ]
    }
};

module.exports = config;
