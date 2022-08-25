import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/department',
    name: 'department',
    // route level code-splitting
    // this generates a separate chunk (introduction.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "department" */ '../views/DepartmentView.vue')
  },
  {
    path: '/department/engineering',
    name: 'engineering',
    component: () => import(/* webpackChunkName: "department" */ '../views/EngineeringView.vue')
  },
  {
    path: '/department/informationCommunication',
    name: 'informationCommunication',
    component: () => import(/* webpackChunkName: "department" */ '../views/InformationCommunicationView.vue')
  },
  {
    path: '/department/naturalScience',
    name: 'naturalScience',
    component: () => import(/* webpackChunkName: "department" */ '../views/NaturalScienceView.vue')
  },
  {
    path: '/department/business',
    name: 'business',
    component: () => import(/* webpackChunkName: "department" */ '../views/BusinessView.vue')
  },
  {
    path: '/department/humanities',
    name: 'humanities',
    component: () => import(/* webpackChunkName: "department" */ '../views/HumanitiesView.vue')
  },
  {
    path: '/department/socialScience',
    name: 'socialScience',
    component: () => import(/* webpackChunkName: "department" */ '../views/SocialScienceView.vue')
  },
  {
    path: '/department/softwareFusion',
    name: 'softwareFusion',
    component: () => import(/* webpackChunkName: "department" */ '../views/SoftwareFusionView.vue')
  },
  {
    path: '/department/medicine',
    name: 'medicine',
    component: () => import(/* webpackChunkName: "department" */ '../views/MedicineView.vue')
  },
  {
    path: '/department/nursing',
    name: 'nursing',
    component: () => import(/* webpackChunkName: "department" */ '../views/NursingView.vue')
  },
  {
    path: '/department/pharmacy',
    name: 'pharmacy',
    component: () => import(/* webpackChunkName: "department" */ '../views/PharmacyView.vue')
  },
  {
    path: '/cat',
    name: 'cat',
    component: () => import(/* webpackChunkName: "cat" */ '../views/CatView.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import(/* webpackChunkName: "News" */ '../views/NewsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
