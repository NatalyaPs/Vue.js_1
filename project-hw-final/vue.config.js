// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })


const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {

      sass: {
        additionalData: `@import "~@/variables.sass"`
      },

      scss: {
        additionalData: `@import "~@/variables.scss";`
      },

    }
  }
})