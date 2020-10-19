import Vue from 'vue'
import VueRouter from 'vue-router'
import FeedApp from '../views/FeedApp'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FeedApp',
    component: FeedApp
  },

]

const router = new VueRouter({
  routes
})

export default router
