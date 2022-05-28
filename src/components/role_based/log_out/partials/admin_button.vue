<template >
    <BaseButton @click="logoutAdminAndDestoryApp">
        ADMIN ULTIMATIVE Log Out
    </BaseButton>
</template>

<script>
import BaseButton from './base_button.vue'

export default {
  name: 'AdminButton',
  emits: ['admin'],
  methods: {
    logoutAdminAndDestoryApp () {
      console.log('DO ULTIMATIVE LOG OUT WITH APP DESTROYING!!!! NO ONE WILL GET SALVATION')
      this.$emit('admin')
    }
  },
  components: {
    BaseButton
  }
}
</script>

<style lang="scss" scoped>

</style>
