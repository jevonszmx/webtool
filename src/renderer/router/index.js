import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    
    {
      path: '/Native2Unicode',
      name: 'Native2Unicode',
      component: require('@/components/Native2Unicode').default
    },
    {
      path: '/Native2ASCII',
      name: 'Native2ASCII',
      component: require('@/components/Native2ASCII').default
    },
    {
      path: '/Native2UTF8',
      name: 'Native2UTF8',
      component: require('@/components/Native2UTF8').default
    },
    {
      path: '/urlencode',
      name: 'urlencode',
      component: require('@/components/Urlencode').default
    },
    
    {
      path: '*',
      redirect: '/urlencode'
    }
  ]
})
