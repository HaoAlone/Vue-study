// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import rt from "./router/index"
import axios from 'axios'

Vue.use(Router)

Vue.config.productionTip = false

Vue.prototype.$axios = axios;


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:rt,
  components: { App },
  template: '<App/>'
})
