import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Placeship from '@/components/Placeship'
import Playgame from '@/components/Playgame'
import Profile from '@/components/Profile'
import lobby from '@/components/lobby'
import room from '@/components/room'
import CreateRoom from '@/components/CreateRoom'
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
      path: '/room/:roomId',
      name: 'room',
      component: room
    },
    {
      path: '/placeship',
      name: 'placeship',
      component: Placeship
    },
    {
      path: '/Playgame',
      name: 'Playgame',
      component: Playgame
    },
    {
      path: '/CreateRoom',
      name: 'CreateRoom',
      component: CreateRoom
    }
  ]
})
