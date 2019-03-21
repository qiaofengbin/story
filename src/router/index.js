import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/index'
import Upload from '@/views/upload/index'
import Submit from '@/views/submit/index'

Vue.use(Router)

export default new Router({
  routes: [{
    path:'/',
    redirect:'/home'
  },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:'/upload',
      name:'Upload',
      component:Upload
    },
    {
      path:'/submit',
      name:'Submit',
      component:Submit
    }
  ]
})
