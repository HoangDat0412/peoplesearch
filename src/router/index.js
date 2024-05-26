import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomeLayout from '@/layout/HomeLayout/HomeLayout.vue'
import LoginLayout from '@/layout/LoginLayout/LoginLayout.vue'
import LoginView from '@/views/LoginView/LoginView.vue'
import HomeView from '@/views/HomeView/HomeView.vue'
import ChatView from '@/views/ChatView/ChatView.vue'
import RegisterView from '@/views/Register/RegisterView.vue'
import AccountLayout from '@/layout/AccountLayout/AccountLayout.vue'
import AccountView from '@/views/Account/AccountView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/chat/:id',
          name: 'chat',
          component: ChatView
        }
      ]
    },
    {
      path: '/',
      name: 'loginlayout',
      component: LoginLayout,
      children: [
        {
          path: '/login',
          name: 'login',
          component: LoginView
        },
        {
          path: '/register',
          name: 'register',
          component: RegisterView
        }
      ]
    },
    {
      path: '/',
      name: 'accountlayout',
      component: AccountLayout,
      children: [
        {
          path: '/account',
          name: 'account',
          component: AccountView
        }
      ]
    }
  ]
})

export default router
