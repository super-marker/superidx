
const container = [
  {
    path: '/container',
    name: 'Container',
    component: () => import('@/components/container/Container')
  }, {
    path: '/container/node',
    name: 'NodeManager',
    component: () => import('@/components/container/NodeManager')
  }
]
export default container
