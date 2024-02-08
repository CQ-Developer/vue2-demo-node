import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    actions: {
        plusWhenOdd({ commit, state }, payload) {
            if (state.sum % 2) {
                commit('plusValue', payload)
            }
        },
        // 可以使用箭头函数
        plusDelayed: ({ commit }, payload) => setTimeout(() => commit('plusValue', payload), 1000)
    },
    state: {
        sum: 0,
        school: '清华',
        subject: '计算机'
    },
    mutations: {
        plusValue(state, value) {
            state.sum += value
        },
        minusValue(state, value) {
            state.sum -= value
        }
    },
    getters: {
        timesTen: state => state.sum * 10
    }
})