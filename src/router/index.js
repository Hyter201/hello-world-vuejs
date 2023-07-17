import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import CompletedView from '../views/CompletedView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/completati',
    name: 'completati',
    component: CompletedView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  }
]

const router = new VueRouter({
  routes
})

export default router
