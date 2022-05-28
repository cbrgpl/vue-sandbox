export default {
  namespaced: true,
  state: {
    role: ROLES.ANON
  },
  getters: {
    role: (state) => state.role
  },
  mutations: {
    setRole (state, role) {
      state.role = role
    }
  }
}
