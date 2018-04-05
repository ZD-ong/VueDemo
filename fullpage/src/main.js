// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Fullpage from '@/components/fullpage.vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    bgColor: ["#c90", "#c09", "#9c0", "#09c"]
  },
  components: { Fullpage },
  // template: '<App/>'
})
