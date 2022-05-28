<template >
    <div class="d-flex h-screen w-100">
        <v-card color="grey-darken-3" class="role-choice-controls ma-auto w-50">
          <v-card-header >
            <v-card-header-text>
              <v-card-title>Application controls</v-card-title>
              <v-card-subtitle>Use control form to change application state</v-card-subtitle>
            </v-card-header-text>
          </v-card-header>

           <v-card-text class="mt-8">
             <v-select color="red-lighten-1" v-model="role" :items="roles" item-value="roleKey" item-title="roleName" label="Choose role" />
             <v-text-field color="red-lighten-1" v-model="id" label="Session ID" />
           </v-card-text>
        </v-card>
    </div>
</template>

<script>
import { ROLES } from 'consts'

export default {
  name: 'RoleChoice',
  data () {
    return {
      role: null
    }
  },
  watch: {
    role (newRole) {
      console.log('watch', newRole)
      this.$store.commit('role/setRole', newRole)
    }
  },
  computed: {
    roles () {
      const roleKeys = Object.keys(ROLES)

      return roleKeys.map((roleKey) => ({
        roleKey,
        roleName: ROLES[roleKey]
      }))
    }
  },
  created () {
    this.setRole()
  },
  methods: {
    setRole () {
      const role = this.$store.getters['role/role']
      const roleKey = Object.keys(ROLES).find((roleKey) => ROLES[roleKey] === role)
      this.role = roleKey
    }
  }
}

</script>

<style lang="scss" scoped>

.role-choice-controls {
  max-width: 450px;
  color: #fff !important;
}

</style>
