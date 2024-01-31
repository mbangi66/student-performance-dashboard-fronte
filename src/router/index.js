import { createRouter, createWebHashHistory } from 'vue-router'
import AverageScores from '@/components/AverageScores.vue'
import Home from "@/components/Home.vue"
import StudentsList from "../components/StudentsList.vue"

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
  {
    path: '/StudentsList/:schoolId',
    name: 'StudentsList',
    component: StudentsList,
    props: true,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
