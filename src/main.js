import Vue from 'vue'
import App from './App.vue'
// 导入vue-router
import VueRouter from 'vue-router'
// 导入路由配置
import router from './router/index.js'

Vue.config.productionTip = false

// 使用VueRouter插件
Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App),
  // 配置路由规则
  router
})