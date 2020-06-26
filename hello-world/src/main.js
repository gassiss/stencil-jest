import Vue from 'vue'
import App from './App.vue'

import { defineCustomElements } from 'stencil-example/loader'
defineCustomElements(window)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
