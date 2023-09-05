const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = { 
  css: { 
    loaderOptions: { 
      // передача настроек в sass-loader 
      // @/ это псевдоним к каталогу src/ поэтому предполагается, 
      // что у вас в проекте есть файл src/variables.scss 
      // Примечание: эта опция называется "prependData" в sass-loader v8 
      scss: { 
        // additionalData: `@import "~@/assets/styles/_vars.scss";`
        additionalData: `@import "~@/assets/styles/style.scss";`
      }, 
      // передача настроек Less.js в less-loader 
    } 
  } 
}