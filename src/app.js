import Vue from 'vue'
import Button from './Button.vue'
import Icon from './Icon'
import ButtonGroup from './ButtonGroup'


Vue.component('h-button', Button)
Vue.component('h-icon', Icon)
Vue.component('h-button-group', ButtonGroup)

new Vue({
  data: {
    loading1: false,
    loading2: false
  }
}).$mount('#app')