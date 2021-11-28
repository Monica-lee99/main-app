import HelloWorld from '@/components/HelloWorld'
import Index from '../views/main/index'
import Home from '../views/main/home'

const routes = [
  {
    path: '/*',
    name: 'HelloWorld',
    component: HelloWorld,
    // redirect: '/index',
    children: [
      { path: '/index', name: 'Index', component: Index },
      { path: '/home', name: 'Home', component: Home }
    ]
  }

  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: () => import('../views/main/index')
  // }
]
export default routes
