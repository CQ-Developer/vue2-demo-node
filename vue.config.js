const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    /**
     * 开启代理服务器用于处理开发环境中的跨域问题
     * proxy: 'http://localhost:5000'
     * 这种方式不够灵活，当前的资源存在则不会走代理服务器
     */
    proxy: {
      /**
       * https://cli.vuejs.org/zh/config/#devserver-proxy
       */
      '/api': {
        // 目标代理服务器
        target: 'http://localhost:5000',
        ignorePath: true,
        // 控制请求头的Host值
        changeOrigin: true,
        // 是否使用websocket
        ws: true
      }
    }
  }
})
