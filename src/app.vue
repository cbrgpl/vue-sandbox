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
  }
}
</script>

<style lang="scss">

html {
  overflow-y: auto !important;
}

</style>
