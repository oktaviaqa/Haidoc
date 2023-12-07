import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import CartPage from '../views/CartView.vue'
import DokterPage from '../views/DokterPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterPage
    },
    {
      path: '/cart',
      name: 'Cart',
      component: CartPage
    },
    {
      path: '/dokter',
      name: 'Dokter',
      component: DokterPage
    },
  ]
})
router.beforeEach((to, from, next) => {
  if (localStorage.access_token && to.name === 'Login') {
    next ({ name: 'home'})
  } else {
    next()
  }
})

export default router
