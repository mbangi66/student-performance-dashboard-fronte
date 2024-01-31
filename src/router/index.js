import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "@/components/Home.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/AverageScores',
    component: () => import('../components/AverageScores.vue'),
  },
  {
    path: '/StudentsList/:schoolId',
    name: 'StudentsList',
    component: () => import("../components/StudentsList.vue"),
    props: true,
  },
  {
    path: '/performance-by-gender',
    name: 'PerformanceByGender',
    component: () => import("../components/PerformanceByGender.vue"),
    meta: {
      title: 'Performance By Gender', 
    },
  },
  {
    path: '/students',
    name: 'GetAllStudents',
    component: () => import("../components/GetAllStudents.vue"),
  },
  {
    path: '/students/by-gender/:gender',
    name: 'StudentsByGender',
    component: () => import("../components/StudentsByGender.vue"),
    props: true,
  },
  {
    path: '/performance/:studentId',
    name: 'student-performance',
    component: () => import('../components/StudentPerformance.vue'),
    props: true, 
  },
  {
    path: '/school-performance/:schoolId',
    name: 'SchoolPerformance',
    component: () => import('../components/SchoolPerformance.vue'),
    props: true,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
