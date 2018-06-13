import Vue from 'Vue'
import cell from './cell.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(cell)
})
