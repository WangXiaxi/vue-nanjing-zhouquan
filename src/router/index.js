import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import Meeting from 'components/meeting/meeting'
import SureOrder from 'components/sure-order/sure-order'
import Order from 'components/order/order'
import OrderChildren from 'components/order/children/children'

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
    },
    { // 网站首页路由
      path: '/sure-order',
      name: 'SureOrder',
      component: SureOrder,
      meta: {
        noShowFooter: true
      }
    },
    { // 网站首页路由
      path: '/order',
      name: 'Order',
      component: Order,
      children: [
        {
          path: '',
          component: OrderChildren,
          meta: {
            noShowFooter: true
          }
        }
      ]
    }
  ]
})
