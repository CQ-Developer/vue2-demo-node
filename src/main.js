import Vue from 'vue'
import App from './App.vue'
// 导入store
import store from './store/index.js'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  // 配置store
  store
})