import { createRouter, createWebHistory } from 'vue-router'

import MainTemplate from './templates/main/Main.vue'
import AuthTemplate from './templates/auth/Auth.vue'

import Signin from './templates/signIn/SignIn.vue'
import PageNotSignInNotFound from './templates/pageNotFound/PageNotSignInNotFound.vue'

import Home from './templates/home/Home.vue'
import PageNotFound from './templates/pageNotFound/PageNotFound.vue'

import axios from 'axios'
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: MainTemplate,
      children: [
        {
          path: ':catchAll(.*)*',
          name: 'pageNotFound',
          component: PageNotFound,
        },
        {
          path: '',
          name: 'home',
          component: Home,
          meta: {
            requiresAuth: true,
          },
        },
      ],
    },
    {
      path: '/',
      component: AuthTemplate,
      children: [
        {
          path: '',
          name: 'signIn',
          component: Signin,
        },
      ],
    },
    {
      path: '/:catchAll(.*)*',
      name: 'pageNotSignInNotFound',
      component: PageNotSignInNotFound,
    },
  ],
  // scrollBehavior: function (to) {
  //   if (to.hash) {
  //     return {
  //       el: to.hash,
  //     }
  //   }
  // },
})

router.beforeEach((to, from, next) => {
  const username = localStorage.getItem('username')
  if (username) {
    next()
  }
  console.log(username)

  if (to.meta.requiresAuth && !localStorage.getItem('username')) {
    console.log(`Redirect to the Login page.`)
    next({ name: 'signIn' })
  } else {
    console.log(`Redirect to focused page.`)
    next()
  }
})

export default router
