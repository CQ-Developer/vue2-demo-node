import Vue from 'vue'
import Vuex from 'vuex'
import modulePerson from './modules/person.js'
import moduleCounter from './modules/counter.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: { moduleCounter, modulePerson }
})