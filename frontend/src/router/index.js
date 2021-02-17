import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Logout from '../views/Logout.vue'
import Tickets from '../views/Tickets.vue'
import Ticket from '../components/Ticket.vue'
import NewTicket from '../views/NewTicket.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/home',
    name: 'Home2',
    component: Home
  },

  {
    path: '/register',
    name: 'Register',
    component: Register
  },

  {
    path: '/logout',
    name: 'Logout',
    component: Logout,

    beforeEnter(to, from, next) {
      if (store.state.session === null) next({ name: "Home" });
      else next();
    }
  },

  {
    path: '/tickets',
    name: 'Tickets',
    component: Tickets,

    beforeEnter(to, from, next) {
      if (store.state.session === null) next({ name: "Home" });
      else next();
    }
  },

  {
    path: '/new-ticket/',
    name: 'NewTicket',
    component: NewTicket,

    beforeEnter(to, from, next) {
      if (store.state.session === null) next({ name: "Home" });
      else next();
    }
  },

  {
    path: '/ticket/:id',
    name: 'Ticket',
    component: Ticket,

    beforeEnter(to, from, next) {
      if (store.state.session === null) next({ name: "Home" });
      else next();
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
