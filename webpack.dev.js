const path = require("path")
const merger = require("webpack-merge")
const commonWebpack = require("./webpack.common");
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merger( commonWebpack  ,  {
    
    mode: "development",
    devtool: "none",
    output: {
        path: path.resolve(__dirname , "dev"),
        filename: "[name].bundle.name.js"
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./index.html"
        })
    ],
    module:{
        rules: [
            {
              test: /\.css$/,
              use: [
                "style-loader", //3. Inject styles into DOM
                "css-loader", //2. Turns css into commonjs
                "sass-loader" //1. Turns sass into css
              ]
            }
          ]
        
    }
    })