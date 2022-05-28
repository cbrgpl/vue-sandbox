<template >
    <RoleBasedComponent @admin="emitDestroying" @user="logout" :accordance="$options.componentsAccordanceToRole"  >
        Log out
    </RoleBasedComponent>
</template>

<script>
import RoleBasedComponent from '@/components/role_based/_role_based.vue'

import AdminButton from './partials/admin_button.vue'
import UserButton from './partials/user_button.vue'

const componentsAccordanceToRole = [
  {
    roles: [ROLES.USER],
    component: UserButton
  },
  {
    roles: [ROLES.ADMIN],
    component: AdminButton
  }
]

export default {
  name: 'LogOut',
  emits: ['destroy'],
  componentsAccordanceToRole,
  methods: {
    logout () {
      console.log('Do request to logout user')
    },
    emitDestroying () {
      this.$emit('destroy')
    }
  },
  components: {
    RoleBasedComponent
  }
}
</script>

<style lang="scss" scoped>

</style>
