
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import myStore from "@/store";
import VueRouter from 'vue-router'
import routes from '@/router';


Vue.use(VueRouter);
Vue.use(Vuex);
Vue.config.productionTip = false

const store = new Vuex.Store(myStore);
const router = new VueRouter({
  mode: 'history',
  routes,
})


new Vue({
  render: h => h(App),
  store: store,
  router,
}).$mount('#app')