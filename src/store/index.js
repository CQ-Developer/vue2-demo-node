import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleCounter = {
    namespaced: true,
    state: {
        sum: 0,
        school: '清华',
        subject: '计算机'
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
        minusValue: (state, value) => state.sum -= value
    }
}

const modulePerson = {
    namespaced: true,
    state: {
        persons: [
            { id: '001', name: '张三' }
        ]
    },
    getters: {
        firstPersonName: state => state.persons[0].name
    },
    actions: {
        addNamedWang: ({ commit }, payload) => {
            if (payload.name.startsWith('王')) {
                commit('addPerson', payload)
            }
        }
    },
    mutations: {
        addPerson: (state, value) => state.persons.unshift(value)
    }
}

export default new Vuex.Store({
    modules: { moduleCounter, modulePerson }
})