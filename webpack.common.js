
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = {
    entry: {
        main: "./src/index.js",
        sample: "./src/sample.js",
      //  style: "./src/styles.css" // if you use this, you will get double time css in head
    },
    
    module: {
        rules: [
            
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'   // we need node-sass because this module is depend on it/
                ]
            },
            {
                test: /\.html$/,
                use: ["html-loader"]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"
                    }
                }
            }
        ]
    },
    plugins: [  new CleanWebpackPlugin()]
}