
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/tabel',
    name: 'tabel',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/tabel.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
