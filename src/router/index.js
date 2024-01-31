import { createRouter, createWebHashHistory } from 'vue-router'
import AverageScores from '@/components/AverageScores.vue'
import Home from "@/components/Home.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/AverageScores',
    component: AverageScores,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
