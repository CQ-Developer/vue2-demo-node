// 引入vue.runtime.esm.js
import Vue from 'vue'

// 引入自定义的App.vue
import App from './App.vue'

// 引入需要全局混和的对象
import { m2 } from './mixin.js'

/**
 * 使用全局混合
 */
Vue.mixin(m2)

// 关闭生产警告
Vue.config.productionTip = false

// 创建Vue实例
new Vue({
  el: '#app',
  // 由于引入的vue不是一个完整的Vue，不包含模板解析器
  // 所以这里通过render函数，将组件渲染到页面上
  // rander(createElement) {}
  // 就是将DOM中的createElement函数传递进来
  render: h => h(App),
})
