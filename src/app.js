import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon'


Vue.component('g-button', Button)
Vue.component('g-icon', Icon)

new Vue({
  data: {
    loading1: null
  }
}).$mount('#app')