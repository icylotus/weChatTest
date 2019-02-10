import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import addressBook from '@/components/addressBook'
import find from  '@/components/find'
import me from  '@/components/me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/addressBook',
      name: 'addressBook',
      component: addressBook
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/me',
      name: 'me',
      component: me
    }
  ]
})
