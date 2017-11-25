import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Profile from '@/components/Profile'
import Placeship from '@/components/Placeship'
import Playgame from '@/components/Playgame'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      path: '/login',
      name: 'Login',
      component: Login
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
