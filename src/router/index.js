import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/TheLogin'
import Container from '@/container/Container'
import UserContainer from '@/container/UserContainer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Container',
      component: Container,
    },
    {
      path: '/user',
      name: 'UserContainer',
      component: UserContainer
    },

  ],

  
})
