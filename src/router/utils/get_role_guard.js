import store from '@/store'

/*
    Define:
    - 'params.roles' to specify roles which have access to route
*/

export default (roles = [], name = NO_ROLE_ACCESS_REDIRECT) => (to, from, next) => {
  const role = store.getters['role/role']

  if (!roles.includes(role)) {
    next({ name })
    return
  }

  next()
}
