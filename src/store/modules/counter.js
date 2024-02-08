export default {
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