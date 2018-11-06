import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./../pages/index.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./../pages/about.vue')
    }
  ]
})
