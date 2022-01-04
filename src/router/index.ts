import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/Home.vue'
import About from '../views/About.vue'
import ClaimReport from '../views/ClaimReport/ClaimReport.vue';
import { RouterPaths } from '../types/routerPaths';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: RouterPaths.home,
      name: 'home',
      component: Home
    },
    {
      path: RouterPaths.about,
      name: 'about',
      component: About
    },
    {
      path: RouterPaths.claimReport,
      name: 'claimReport',
      component: ClaimReport
    }
  ]
})

export default router
