const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "${path.resolve(__dirname, 'src/styles/variables.scss')}";`
      }
    }
  }
}) 