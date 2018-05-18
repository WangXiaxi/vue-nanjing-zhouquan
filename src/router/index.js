import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import Meeting from 'components/meeting/meeting'

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
    },
    { // 网站首页路由
      path: '/meeting',
      name: 'Meeting',
      component: Meeting,
      meta: {
        noShowFooter: true
      }
    }
  ]
})
