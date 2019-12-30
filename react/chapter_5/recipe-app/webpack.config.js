var webpack = require('webpack')
var path = require('path')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "dist", "assets"),
        filename: "bundle.js",
        sourceMapFilename: "bundle.map"
    },
    devtool: "#source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env', '@babel/react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [require('autoprefixer')]
                            }
                        }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
                uglifyOptions: {
                    compress: true,
                    warnings: false,
                    mangle: true
                }
            })
        ]
    }
}