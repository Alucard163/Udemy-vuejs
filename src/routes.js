import VueRouter from 'vue-router'
import Cars from './pages/Cars'
import Home from './pages/Home'

export default new VueRouter ({
  routes: [
    {
      path: '', //localhost:8080
      component: Home
    },
    {
      path: '/cars', //localhost:8080
      component: Cars
    }
  ],
  mode: 'history'
})
