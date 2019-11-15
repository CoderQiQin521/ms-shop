import Vue from 'vue'
import VueRouter from 'vue-router'
import GoodsList from '../views/GoodsList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'goodslist',
    component: GoodsList
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
