import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/config/routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_URL,
  routes
})

export default router