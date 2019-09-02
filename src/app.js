import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon'


Vue.component('h-button', Button)
Vue.component('h-icon', Icon)

new Vue({
  data: {
    loading1: false,
    loading2: false
  }
}).$mount('#app')