import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/component/Home'
import Stock from '@/component/stock/Stocks'
import Portfolio from '@/component/portfolio/Portfolio'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/stocks',
      name: 'Stock',
      component: Stock
      // children: [
      //   {
      //     path: '',
      //     component: Stock,
      //     name: 'stock'
      //   }
      // ]
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
