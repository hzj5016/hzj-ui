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

// 单元测试
import chai from 'chai'
const expect = chai.expect

{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'download'
    }
  })
  button.$mount('#test')
  const el = button.$el.querySelector('use')
  expect(el.getAttribute('xlink:href')).to.eq('#h-download')
  
}