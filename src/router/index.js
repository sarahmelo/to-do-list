import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/index.vue')
const Login = () => import('../views/Login/index.vue')
const SignUp = () => import('../views/SignUp/index.vue')
const Todo = () => import('../views/Todo/index.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo,
    meta: {
      hasAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
