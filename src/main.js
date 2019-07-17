import Vue from 'vue'
import App from './App'
// 引入路由
import router from './router'
// 引入elemenui
import ElementUI from 'element-ui'
// 引入elementui主题
import 'element-ui/lib/theme-chalk/index.css'
// 引入css
import '@/styles/index.scss'
// 引入图标字库
import 'font-awesome/scss/font-awesome.scss'
router.beforeEach((to, from, next) => {
  if(to.path === '/login'){
    sessionStorage.removeItem('user');
  }
  var user = sessionStorage.getItem('user');
  if(to.isadmin){
    if(user=="admin"){
      next();
    }else{
      next();
    }
  }
  if(!user && to.path !== '/login'){
    next({
      path: '/login'
    })
  }else{
    next();
  }
})
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
