import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [    
  {
    path: '/',
    name: 'login',
    component: () => import(      
      '@/components/login'
    )
  },
  {
      path: '/rlas',
      name: 'rlas',
      component: () => import(      
        '@/components/rlas'
      ),
      props: true
  } 
]
const router = new VueRouter({  
  routes
})

export default router
