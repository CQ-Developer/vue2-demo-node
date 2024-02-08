export default {
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