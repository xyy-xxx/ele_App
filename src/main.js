
import Vue from 'vue'
import app from './app'
import router from './router'

import VueResource from 'vue-resource'

import './mock/mockServer'   /*引入此模块就能访问映射的路由*/
import './common/stylus/index.styl'

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<app />',
  components: { app }
  /*render : h => h(app),*/
})
