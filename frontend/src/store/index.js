import Vue from 'vue'
import Vuex from 'vuex'

import { SessionActions, SessionMutations, SessionState } from './session'
import { TicketState, TicketMutations, TicketActions } from './tickets'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ...SessionState,
    ...TicketState
  },

  mutations: {
    ...SessionMutations,
    ...TicketMutations
  },

  actions: {
    ...SessionActions,
    ...TicketActions
  },

  modules: {
  }
})
