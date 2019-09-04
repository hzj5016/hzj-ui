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
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
// 测试icon
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
  // 测试通过后
  button.$destroy()
  button.$el.remove()
}
// 测试icon位置
{
  let div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'right',
      iconPosition: 'right'
    }
  })
  button.$mount(div)
  let svg = button.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2')
  button.$destroy()
  button.$el.remove()
}
// 测试按钮点击
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData: {
      icon: 'right',
      iconPosition: 'right'
    }
  })
  button.$mount()
  // 里面的箭头函数就是被spy代理的函数
  let spy = chai.spy(() => {})
  button.$on('click', spy)
  button.$el.click()
  expect(spy).has.been.called()
}