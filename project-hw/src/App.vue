<template>
  <div id="app">
    
    <HeaderComp/>
    <BannerComp/>
    <OurProjectList/>
    <CounterComp/>
    <!-- <ArticleNewsList/> -->
    <ArticlesNewsMainPage/>
    <FooterComp/>

    <BlogBanner/>
    

  </div>
</template>

<script>


import BannerComp from './components/BannerComp.vue';
import HeaderComp from './components/HeaderComp.vue'
import OurProjectList from './components/OurProjectList.vue';
import CounterComp from './components/CounterComp.vue';
import FooterComp from './components/FooterComp.vue';
// import ArticleNewsList from './components/ArticleNewsList.vue';
import ArticlesNewsMainPage from './components/ArticlesNewsMainPage.vue';
import BlogBanner from './components/BlogBanner.vue';

export default {
    name: 'App',
    components: {
    HeaderComp,
    BannerComp,
    OurProjectList,
    CounterComp,
    FooterComp,
    // ArticleNewsList,
    ArticlesNewsMainPage,
    BlogBanner
  },
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
}
</style>
