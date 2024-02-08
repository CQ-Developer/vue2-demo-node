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
    actions: {
        // 接收组件转发的数据
        plus(context, payload) {
            context.commit('plusValue', payload)
        },
        // 技巧：对context对象使用解构赋值
        minus({ commit }, payload) {
            commit('minusValue', payload)
        },
        plusWhenOdd({ commit, state }, payload) {
            if (state.sum % 2) {
                commit('plusValue', payload)
            }
        },
        // 可以使用箭头函数
        plusDelayed: ({ commit }, payload) => setTimeout(() => commit('plusValue', payload), 1000)
    },
    state: {
        // 将需要处理的状态提升到vuex中
        sum: 0
    },
    mutations: {
        // 执行真正的状态修改
        plusValue(state, value) {
            state.sum += value
        },
        minusValue(state, value) {
            state.sum -= value
        }
    },
    // 类似于计算属性
    getters: {
        timesTen: state => state.sum * 10
    }
})