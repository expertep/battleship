import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Placeship from '@/components/Placeship'
import Playgame from '@/components/Playgame'
import Profile from '@/components/Profile'
import lobby from '@/components/lobby'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile/:uid',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/lobby',
      name: 'lobby',
      component: lobby
    },
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
