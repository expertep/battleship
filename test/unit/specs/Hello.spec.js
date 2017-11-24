import Vue from 'vue'
import Placeship from '@/components/Placeship'

describe('Placeship.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Placeship)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })
})
