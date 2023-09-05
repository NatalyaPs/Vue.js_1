<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HeaderComp/>
    <BannerComp/>
    <ProjectList/>
    <CounterComp/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import BannerComp from './components/BannerComp.vue';
import HeaderComp from './components/HeaderComp.vue'
import ProjectList from './components/ProjectList.vue';
import CounterComp from './components/CounterComp.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    HeaderComp,
    BannerComp,
    ProjectList,
    CounterComp,
}
}
</script>
<!-- @import './assets/styles/_vars.scss'; -->
<style lang="scss">
#app {


  // * {
  //     padding: 0;
  //     margin: 0;
  //     box-sizing: border-box;
  // }

  body {
      font-family: 'DM Serif Display', 'Jost', sans-serif;
  //     background-size: 100vw;
  }

  // a {
  //     text-decoration: none;
  // }

  // .center {
  //     padding-left: calc(50% - 600px);
  //     padding-right: calc(50% - 600px);
  // }
    // font-family: Avenir, Helvetica, Arial, sans-serif;
    // -webkit-font-smoothing: antialiased;
    // -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    // color: #2c3e50;
    // margin-top: 60px;
}
</style>
