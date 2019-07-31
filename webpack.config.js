const entry = require('./webpack_config/entry_webpack');
const output = require('./webpack_config/output_webpack');
const moduls = require('./webpack_config/module_webpack');
const plugins = require('./webpack_config/plugin_webpack');
const devServer = require('./webpack_config/devServer_webpack');
console.log(encodeURIComponent("dui______"+output.content));
var website = {
    publicPath: "http://192.168.1.104:8007/"
}

module.exports = {
    devtool:'eval-source-map' ,
    entry: entry.path,

    output: output.content,
    module:moduls.content ,
    plugins: plugins.content,
    devServer:devServer.content,
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    // cacheGroupKey here is `commons` as the key of the cacheGroup
                    name: "jquery",
                    filename: 'assets/js/[name].min.js',
                    chunks: 'all'
                }
            }
        }
    },

    watchOptions: {
        poll:1000,
        aggregateTimeout:500,
        ignored: /node_modules/,
    },
};