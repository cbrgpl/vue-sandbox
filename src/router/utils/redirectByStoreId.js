import store from '@/store'

export default (to, from, next) => {
  const id = store.getters['user/id']

  if (id !== to.params.id) {
    next({ name: 'ProfilePreview', params: to.params })
    return
  }

  next()
}
