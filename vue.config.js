// vue.config.js
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath:"./",
    outputDir:"dist",
    assetsDir:"static",
    
    // webpack-dev-server 相关配置  
    devServer: {
        // 调试端口
        port: 8989
    }
    //其他配置....
}