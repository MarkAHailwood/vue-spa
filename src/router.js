import Vue from 'vue'
import VueRouter from 'vue-router'
// import Category from './theme/Category.vue'
// import Login from './theme/Login.vue'
// import NotFound from './theme/NotFound.vue'

const Category = () => System.import('./theme/Category.vue')
const Readme = () => System.import('./theme/Readme.vue')
const NotFound = () => System.import('./theme/NotFound.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior: (to, from, savedPosition) => ({ y: 0 }),
  routes: [
    {path: '', name: 'indexPage', component: Category},
    {path: '/readme', name: 'readme', component: Readme},
    {path: '/search', name: 'category', component: Category},
    {path: '*', component: NotFound}
  ]
}
)

export default router
