<template >
    <div>
      <router-view v-slot="{Component}" >
        <component :is="Component"></component>
      </router-view>
    </div>
</template>

<script>
export default {
  name: 'Empty'
}
</script>

<style lang="scss" scoped>

</style>
