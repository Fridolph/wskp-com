import EntryPage from '../views/Entry/index'
import Home from '../views/Home'

export default [
  {
    path: '/',
    name: 'EntryPage',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "About" */ '../views/About/index')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home/index')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import(/* webpackChunkName: "Product" */ '../views/Product/index')
  },
  {
    path: '/service',
    name: 'Service',
    component: () => import(/* webpackChunkName: "Service" */ '../views/Service/index')
  },
  {
    path: '/solution',
    name: 'Solution',
    component: () => import(/* webpackChunkName: "Solution" */ '../views/Solution/index')
  },
  {
    path: '/learn',
    name: 'Learn',
    component: () => import(/* webpackChunkName: "Learn" */ '../views/Learn/index')
  },
]
