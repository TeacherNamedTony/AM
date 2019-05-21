import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/TheLogin'

import Container from '@/container/Container'
import UserContainer from '@/container/UserContainer'

import Untreated from '@/views/untreated'
import Audited from '@/views/audited'
import Overdue from '@/views/overdue'
import Logout from '@/views/logout'
// import Statistics from '@/views/statistics'
import ApplyPage from '@/views/applypage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      redirect: '/untreated',
      name: 'Container',
      component: Container,
      children: [
        {path: 'untreated',isadmin:true, name: '待处理', component: Untreated },
        {path: 'audited', name: '已审核', component: Audited, },
        {path: 'overdue', name: '授权过期', component: Overdue, },
        {path: 'logout', name: '注销', component: Logout, },
        {path: 'applypage', name: '授权详情页面(暂存)', component: ApplyPage, },
      ]
    },
    {
      path: '/user',
      name: 'UserContainer',
      component: UserContainer
    },
  ],

  
})
