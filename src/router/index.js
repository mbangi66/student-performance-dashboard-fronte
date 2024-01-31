import { createRouter, createWebHashHistory } from 'vue-router'
import AverageScores from '@/components/AverageScores.vue'
import Home from "@/components/Home.vue"
import StudentsList from "../components/StudentsList.vue"
import PerformanceByGender from "../components/PerformanceByGender.vue"

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
  {
    path: '/performance-by-gender',
    name: 'PerformanceByGender',
    component: PerformanceByGender,
    meta: {
      title: 'Performance By Gender', 
    },
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
