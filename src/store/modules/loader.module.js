// initial state
const state = () => ({
  show: false,
})

// getters
const getters = {}

// actions
const actions = {
  updateShow({ commit }, payload) {
    commit('SET_SHOW', payload)
  },
}

// mutations
const mutations = {
  SET_SHOW(state, payload) {
    state.show = payload.show
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
