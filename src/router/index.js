import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import container from './container'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    ...container
  ]
})
