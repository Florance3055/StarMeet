module.exports = {
    devServer: {
        /* 自动打开浏览器 */
        open: true,
        host: '127.0.0.1',
        port: 8080,
        https: false,
        hotOnly: false,
        /*设置代理服务器*/
        proxy: {
            '/api': {
                /* 目标代理服务器地址 */
                target: 'http://sm.2key.top/api',
                ws: true,
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api': '' //请求的时候使用这个api就可以，/api表示http://api.xxx.com/api/
                }
            }
        }
    }
}