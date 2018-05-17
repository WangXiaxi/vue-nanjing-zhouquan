import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    { // 网站首页路由
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true
      }
    }
  ]
})
