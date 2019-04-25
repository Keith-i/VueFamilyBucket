import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorldTwo from '@/components/HelloWorldTwo'
import test from '@/components/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/second',
      name: 'HelloWorldTwo',
      component: HelloWorldTwo
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
  ]
})
