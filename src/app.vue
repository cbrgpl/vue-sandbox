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
    bus.on('test', () => this.appTest())
  },
  methods: {
    appTest () {
      console.log('app test')
      bus.on('test', () => console.log('handler 2'))
    }
  }
}
</script>

<style lang="scss">

html {
  overflow-y: auto !important;
}

</style>
