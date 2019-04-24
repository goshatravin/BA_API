import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import instruction from './views/instruction.vue'
import bordero from './views/bordero.vue'
import borderoadd from './views/borderoadd.vue'
import borderoref from './views/borderoref.vue'
import borderodel from './views/borderodel.vue'
import losses from './views/losses.vue'
import setUp from './views/setUp.vue'
import getalldate from './views/getalldata.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/instruction',
      name: 'instruction',
      component: instruction
    },
    {
      path: '/bordero',
      name: 'bordero',
      component: bordero
    },
    {
      path: '/add',
      name: 'add',
      component: borderoadd
    },
    {
      path: '/ref',
      name: 'ref',
      component: borderoref
    },
    {
      path: '/del',
      name: 'del',
      component: borderodel
    },
    {
      path: '/losses',
      name: 'losses',
      component: losses
    },
    {
      path: '/setUp',
      name: 'setUp',
      component: setUp
    },
    {
      path: '/getalldate',
      name: 'getalldate',
      component: getalldate
    },
  ]
})
