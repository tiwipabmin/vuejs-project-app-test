// initial state
const state = () => ({
  username: null,
  fname: null,
  lname: null,
})

// getters
const getters = {
  getAll(state) {
    return {
      username: state.username,
      fname: state.fname,
      lname: state.lname,
      role: 'admin',
    }
  },
}

// actions
const actions = {}

// mutations
const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
