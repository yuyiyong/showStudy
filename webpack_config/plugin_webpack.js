const glob = require('glob');
const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const htmlPlugin = require('html-webpack-plugin');
const extractTextPlugin = require("extract-text-webpack-plugin");
const purifyCssPlugin = require("purifycss-webpack");
const webpack = require('webpack');
const copyWebpackPlugin = require('copy-webpack-plugin');
const plugins = {};
plugins.content = [

    //new uglify(),
    new htmlPlugin({
        minify: {
            removeAttributeQuotes: true
        },
        hash: true,
        template: './src/index.html'
    }),
    new extractTextPlugin("/css/index.css"),
    new purifyCssPlugin({
        paths: glob.sync(path.join("src/*.html"))
    }),
    new webpack.ProvidePlugin({
        $: "jquery"
    }),
    new webpack.BannerPlugin('jsDui打包项'),
    new webpack.HotModuleReplacementPlugin(),
    new copyWebpackPlugin([
        {
            from: __dirname + 'src/public',
            to: './public'
        }
    ]),
];
module.exports = plugins;