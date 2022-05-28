import Empty from '@/views/empty.vue'

import utils from './utils'

export default [
  {
    path: '/',
    name: 'Root',
    redirect: { name: 'RoleChoice' }
  },
  {
    path: '/role-choice',
    name: 'RoleChoice',
    component: () => import(/* RoleChoice */ '@/views/role_choice/role_choice.vue')
  },
  {
    path: '/profile',
    component: Empty,
    redirect: { name: 'RoleChoice' },
    children: [
      {
        path: ':id',
        name: 'Profile',
        component: Empty,
        beforeEnter: utils.getRoleGuard(['user', 'admin']),
        children: [
          {
            path: '',
            name: 'ProfileMe',
            component: () => import(/* ProfileMe */ '@/views/profile_me.vue'),
            beforeEnter: utils.redirectByStoreId // TODO Merge with lower route and do component replacement by ID
          },
          {
            path: 'preview',
            name: 'ProfilePreview',
            component: () => import(/* ProfilePreview */ '@/views/profile_preview.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/admin-panel',
    name: 'AdminPanel',
    beforeEnter: utils.getRoleGuard(['admin']),
    component: () => import(/* AdminPanel */ '@/views/admin_panel.vue')
  }

]
