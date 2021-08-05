import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Add from '../views/AddMemo.vue'
import Read from '../views/ReadMemo.vue'
import Signin from '../views/Signin'
import Signup from '../views/Signup'

Vue.use(VueRouter)

const routes = [
  { path: '/' ,name: 'Home',component: Home },
  { path: '/add' ,name: 'Add',component: Add },
  { path: '/memos/:memoId' ,name: 'Read',component: Read },
  { path: '/signin' ,name: 'Signin',component: Signin },
  { path: '/signup' ,name: 'Signup',component: Signup }, 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
  next();
});

export default router
