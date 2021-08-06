import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Signin from '@/components/Signin';
import Signup from '@/components/Signup';
import Add from '@/components/AddMemo';
import Read from '@/components/ReadMemo';
import Update from '@/components/UpdateMemo';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta : {requiresAuth : true}
  },
  {
    path : '/signin',
    name : 'Signin',
    component: Signin
  },
  {
    path : '/signup',
    name : 'Signup',
    component: Signup
  },
  {
    path : '/add',
    name : 'Add',
    component: Add,
    meta : {requiresAuth : true}
  },
  {
    path : '/memos/:memoId',
    name : 'Read',
    component: Read,
    meta : {requiresAuth : true},
  },
  {
    path : '/memos/update/:memoId',
    name : 'Update',
    component: Update,
    meta : {requiresAuth : true}
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach( (to, from, next) => {
  // console.log('afadsfa');
  if(to.matched.some( (record) => record.meta.requiresAuth && !localStorage.getItem('accessToken'))) {
    alert('Signin please');
    next('/signin');
  } else {
    next();
  }
})

export default router