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
    component: () => import(/* webpackChunkName: "Product" */ '../views/Product/index'),
    children: [
      {
        path: 'edr',
        name: 'ProEDR',
        component: () => import(/* webpackChunkName: "ProEDR" */ '../views/Product/vEDR')
      },
      {
        path: 'tsgz',
        name: 'ProEDR',
        component: () => import(/* webpackChunkName: "ProTSGZ" */ '../views/Product/vTSGZ')
      },
      {
        path: 'stds',
        name: 'ProEDR',
        component: () => import(/* webpackChunkName: "ProSTDS" */ '../views/Product/vSTDS')
      },
      {
        path: 'tool',
        name: 'ProEDR',
        component: () => import(/* webpackChunkName: "ProTool" */ '../views/Product/vTool')
      }
    ]
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
  {
    path: '/learn/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "LearnDetail" */ '../views/Learn/detail')
  }
]
