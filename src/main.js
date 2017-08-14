
import Vue from 'vue'
import app from './app'
import router from './router'
import './common/stylus/index.styl'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<app />',
  components: { app }
  /*render : h => h(app),*/
})
