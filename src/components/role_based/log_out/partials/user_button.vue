<template >
    <BaseButton @click="logoutUser" color="yellow">
        USER Log Out
    </BaseButton>
</template>

<script>
import BaseButton from './base_button.vue'

export default {
  name: 'UserButton',
  emits: ['user'],
  methods: {
    logoutUser () {
      console.log('Do commonly logout')
      this.$emit('user')
    }
  },
  components: {
    BaseButton
  }
}
</script>

<style lang="scss" scoped>

</style>
