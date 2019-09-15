import Vue from 'vue'
import Router from 'vue-router'
import Enter from './views/Enter.vue'
import Register from './views/Register.vue'
import Home from './views/Home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Enter
    },
    {
      path:'/register',
      name:"registration",
      component:Register
    },
    {
      path:'/home',
      name:'home',
      component: Home
    }
  ]
})
