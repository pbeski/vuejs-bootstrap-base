import VueRouter from 'vue-router'

import Home from './pages/Home'
import Table from './pages/Table'

import Header from './components/Header'
import Footer from './components/Footer'

const routes = [{
  path: '/',
  components: {
    default: Home,
    header: Header,
    footer: Footer
  }
}, {
  path: '/table',
  components: {
    default: Table,
    header: Header,
    footer: Footer
  }
}]

const router = new VueRouter({
  routes
})

export default router
