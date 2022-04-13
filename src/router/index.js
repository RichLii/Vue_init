import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SignUp from '@/views/SignUp.vue'
import LogIn from '@/views/LogIn.vue'
import DashBoard from '@/views/DashBoard.vue'
import MyAccount from '@/views/Detail/MyAccount.vue'
import store from '@/store'
import axios from 'axios'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sign-up',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/log-in',
    name: 'login',
    component: LogIn
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashBoard,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/dashboard/my-account',
    name: 'myaccount',
    component: MyAccount,
    meta: {
      requireAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from) => {
  await store.dispatch('initialize')
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (!store.state.access) {
      return { name: 'login' }
    } else {
      axios.defaults.headers.common.Authorization = 'Bearer ' + store.state.access
    }
  }
  if (to.matched[0].name === 'login' && store.state.access) {
    return { name: 'myaccount' }
  }
})
export default router
