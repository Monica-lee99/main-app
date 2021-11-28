// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import routes from './router'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.css'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes
})
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#main-app',
  router,
  components: { App },
  template: '<App/>'
})
// startQiankun()
