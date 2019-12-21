// 服务器反向代理配置
// Node是commenjs规范
module.exports = { //导入模块
    devServer: {
        // 主机
        host: 'localhost',
        // 端口
        port: 8080,
        // 代理
        proxy: {
            '/api': {
                // 目标服务器 如果修改环境就在这修改 如：target: 'https://test-www.imooc.com',
                target: 'https://www.imooc.com',
                // 通过设置changeOrigin: true 开启代理
                changeOrigin: true,
                pathRewrite: { //路径的转发规则
                    '/api': ''
                }
            }
        }
    }
}