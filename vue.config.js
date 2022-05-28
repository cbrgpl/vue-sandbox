const path = require('path')
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        consts: path.resolve(__dirname, 'src', 'consts', 'index.js'),
        '@components': path.resolve(__dirname, 'src', 'components')
      }
    }
  }
})
