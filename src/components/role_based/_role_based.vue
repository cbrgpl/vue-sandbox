<template >
  <component :is="currentComponent" >
    <slot />
  </component>
</template>

<script>
import empty from '@/views/empty.vue'

export default {
  name: 'RoleBasedComponent',
  props: {
    accordance: {
      type: Array,
      required: true
    }
  },
  computed: {
    role () {
      return this.$store.getters['role/role']
    },
    currentComponent () {
      const rolesAndComponent = this.accordance.find((rolesAndComponent) => rolesAndComponent.roles.includes(this.role))
      return rolesAndComponent ? rolesAndComponent.component : empty
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
