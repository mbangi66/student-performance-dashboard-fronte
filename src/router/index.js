import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "../views/Home.vue"

const routes = [
  {
    path: '/',
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
  {
    path: '/score-distributions',
    name: 'ScoreDistributions',
    component: () => import('../components/ScoreDistributions.vue'),
  },
  {
    path: '/performance-by-parental-education',
    name: 'PerformanceByParentalEducation',
    component: () => import('../components/PerformanceByParentalEducation.vue'),
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
