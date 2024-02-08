import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sum: 0,
        school: '清华',
        subject: '计算机',
        persons: [
            { id: '001', name: '张三' }
        ]
    },
    getters: {
        timesTen: state => state.sum * 10
    },
    actions: {
        plusWhenOdd: ({ commit, state: { sum } }, payload) => {
            if (sum % 2) commit('plusValue', payload)
        },
        plusDelayed: ({ commit }, payload) => setTimeout(() => commit('plusValue', payload), 1000)
    },
    mutations: {
        plusValue: (state, value) => state.sum += value,
        minusValue: (state, value) => state.sum -= value,
        addPerson: (state, value) => state.persons.unshift(value)
    }
})