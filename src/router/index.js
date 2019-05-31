import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/views/TheLogin'

import Container from '@/container/Container'
import UserContainer from '@/container/UserContainer'

import Untreated from '@/views/untreated'

import Audited from '@/views/audited'

import NearOverDue from '@/views/nearoverdue'

import Overdue from '@/views/overdue'

import Revoke from '@/views/revoke'

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
        {path: 'Revoke', name: '授权异常', component: Revoke, },
        {path: 'nearoverdue', name: '授权即将过期', component: NearOverDue, },
      ]
    },
    {
      path: '/user',
      name: 'UserContainer',
      component: UserContainer
    },
  ],

  
})
