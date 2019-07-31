const path = require('path');
const devServer = {};
devServer.content = {
    contentBase: path.resolve('dist'),
    host: '192.168.1.104',
    compress: true,
    port: 8007
};
module.exports = devServer;
