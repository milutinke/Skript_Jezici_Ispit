import Vue from 'vue'
import Vuex from 'vuex'
import { SessionActions, SessionMutations, SessionState } from './session'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...SessionState
  },
  mutations: {
    ...SessionMutations
  },
  actions: {
    ...SessionActions
  },
  modules: {
  }
})
