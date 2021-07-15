// router.js
import Vue from 'vue'
import Router from 'vue-router'
import login from './components/login.vue'

Vue.use(Router)

export function createRouter () {
    return new Router({
      mode: 'history',
      routes: [
        {path:'/login', component: login}
    ]
})
}