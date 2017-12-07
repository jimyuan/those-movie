const Home = () => import('PAGES/Home')

export default [
  {
    path: '/',
    redirect: '/home'
  }, {
    // 首页
    path: '/home',
    component: Home
  }
]
