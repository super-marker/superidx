import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Container from '@/components/container/Container'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/container',
      name: 'Container',
      component: Container
    }
  ]
})
