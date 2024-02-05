import Vue from 'vue'
import App from './App.vue'
// 引入插件
import { plugin } from './plugin.js'

Vue.config.productionTip = false

// 使用插件
// [可选]可以向插件传递参数
Vue.use(plugin, 1, 2, 3)

new Vue({
  el: '#app',
  render: h => h(App)
})
