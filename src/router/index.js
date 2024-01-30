import { createRouter, createWebHashHistory } from 'vue-router'
import AverageScores from '@/components/AverageScores.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: AverageScores,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
