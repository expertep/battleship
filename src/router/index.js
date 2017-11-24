import Vue from 'vue'
import Router from 'vue-router'
import Placeship from '@/components/Placeship'
import Playgame from '@/components/Playgame'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Placeship',
      name: 'Placeship',
      component: Placeship
    },
    {
      path: '/Playgame',
      name: 'Playgame',
      component: Playgame
    }
  ]
})
