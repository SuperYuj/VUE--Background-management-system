import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Index from '@/views/index'
import Info from '@/views/info'
import Useradd from '@/views/user/useradd'
import Userupdate from '@/views/user/userupdate'
import Userlist from '@/views/user/userlist'
import store from '../store/store'
Vue.use(Router)
let router= new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      redirect:'/info',
      children:[
        {path: '/info',
        name: 'Info',
        component: Info},
        {path: '/useradd',
        name: 'Useradd',
        component: Useradd},
        {path: '/userlist',
        name: 'Userlist',
        component: Userlist},
        {path: '/userupdate',
        name: 'Userupdate',
        component: Userupdate}
      ]
    }
  ]
})
router.beforeEach((to,from,next)=>{
  if(to.path==='/'){
    next();
    return;
  }
  // let user=sessionStorage.getItem('user');
  let user=store.getters.getUser;
  if(user){
    next();
    return;
  }
  next({path:'/'})
})
export default router;