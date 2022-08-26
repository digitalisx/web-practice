import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/college',
    name: 'college',
    // route level code-splitting
    // this generates a separate chunk (introduction.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "college" */ '../views/CollegeView.vue')
  },
  {
    path: '/college/engineering',
    name: 'engineering',
    component: () => import(/* webpackChunkName: "college" */ '../views/colleges/EngineeringView.vue')
  },
  {
    path: '/college/informationCommunication',
    name: 'informationCommunication',
    component: () => import(/* webpackChunkName: "college" */ '../views/colleges/InformationCommunicationView.vue')
  },
  {
    path: '/college/naturalScience',
    name: 'naturalScience',
    component: () => import(/* webpackChunkName: "college" */ '../views/colleges/NaturalScienceView.vue')
  },
  {
    path: '/college/business',
    name: 'business',
    component: () => import(/* webpackChunkName: "college" */ '../views/colleges/BusinessView.vue')
  },
  {
    path: '/college/humanities',
    name: 'humanities',
    component: () => import(/* webpackChunkName: "college" */ '../views/colleges/HumanitiesView.vue')
  },
  {
    path: '/college/socialScience',
    name: 'socialScience',
    component: () => import(/* webpackChunkName: "college" */ '../views/colleges/SocialScienceView.vue')
  },
  {
    path: '/college/softwareFusion',
    name: 'softwareFusion',
    component: () => import(/* webpackChunkName: "college" */ '../views/colleges/SoftwareFusionView.vue')
  },
  {
    path: '/college/medicine',
    name: 'medicine',
    component: () => import(/* webpackChunkName: "college" */ '../views/colleges/MedicineView.vue')
  },
  {
    path: '/college/nursing',
    name: 'nursing',
    component: () => import(/* webpackChunkName: "college" */ '../views/colleges/NursingView.vue')
  },
  {
    path: '/college/pharmacy',
    name: 'pharmacy',
    component: () => import(/* webpackChunkName: "college" */ '../views/colleges/PharmacyView.vue')
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
