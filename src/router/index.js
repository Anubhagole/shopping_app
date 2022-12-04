import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductsPage from '../components/ProductsPage.vue'
import CartPage from '../components/CartPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'products',
    component: ProductsPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
