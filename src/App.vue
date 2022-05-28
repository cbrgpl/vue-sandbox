<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    console.log(eventBus.emit('test', 1, '2', 'arg3', { a: 1 }))
  }
}
</script>

<style lang="scss">

html {
  overflow-y: auto !important;
}

</style>
