// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import svg from 'vue-svg-directive'

Vue.config.productionTip = false
Vue.use(svg, {
  sprites: './assets/weather.svg', // Path to your svg sprite
  class: 'icon' // This class will be applied to your <svg> elements (optional)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
