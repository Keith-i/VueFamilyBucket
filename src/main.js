// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import vuexData from './store'
import ElementUI from 'element-ui'
import axios from 'axios'
import AX from './utils/ajax'

import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.prototype.AX = AX

Vue.use(Vuex)
Vue.use(ElementUI)

const store = new Vuex.Store({
	...vuexData
})
console.log('88888', store)
// const getschoolData = AX('help/getCategories', {})
// console.log(getschoolData)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
