import VueRouter from 'vue-router'

import BackendView from '../views/BackendView.vue'
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/backend', component: BackendView },
]

const router = new VueRouter({
    routes
})

export default router