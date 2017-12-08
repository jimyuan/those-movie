const Home = () => import('PAGES/Home')
const List = () => import('PAGES/List')
const Desc = () => import('PAGES/Desc')

export default [
  {
    path: '/', redirect: '/home'
  }, {
    // 首页
    path: '/home', component: Home
  }, {
    // 列表页
    path: '/list', redirect: '/list/all'
  }, {
    // 列表页
    path: '/list/:type', component: List
  }, {
    // 详情页
    path: '/desc', redirect: '/desc/539'
  }, {
    // 详情页
    path: '/desc/:id', component: Desc
  }
]
