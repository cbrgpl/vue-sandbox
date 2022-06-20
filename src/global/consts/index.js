import deepFreeze from '@/utils/deep_freeze.js'
import registrateGlobalNameSafely from '@/utils/registrate_global_name_safely'

const consts = deepFreeze({
  ROLES: {
    ANON: 'Anonim',
    USER: 'User',
    ADMIN: 'Admin'
  },
  NO_ROLE_ACCESS_REDIRECT: 'RoleChoice'
})

export default () => {
  for (const prop in consts) {
    registrateGlobalNameSafely(prop, consts[prop])
  }
}
