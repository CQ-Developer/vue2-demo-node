import Vue from 'vue'
import Vuex from 'vuex'
import person from './modules/person.js'
import counter from './modules/counter.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: { moduleCounter: counter, modulePerson: person }
})