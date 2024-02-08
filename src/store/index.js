import Vue from 'vue'
import Vuex from 'vuex'

/**
 * vue2需要安装vuex3.x版本
 * npm install vuex@3.6.2
 * 
 * 需要先调用Vue.use(Vuex)
 * 再在vm中注册store(参考main.js代码)
 */
Vue.use(Vuex)

export default new Vuex.Store({
    actions: {},
    state: {},
    mutations: {}
})