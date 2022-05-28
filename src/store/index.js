import { createStore } from 'vuex'

import role from './module/role.js'
import user from './module/user.js'

export default createStore({
  modules: {
    role,
    user
  }
})
