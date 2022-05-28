import { DescriptionError } from '@/error'
import deepFreeze from '@/utils/deep_freeze.js'

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
    if (!window[prop]) {
      window[prop] = consts[prop]
    } else {
      throw new DescriptionError(`Global with name ${prop} already exists`)
    }
  }
}
