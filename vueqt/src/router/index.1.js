import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login'
import Index from '@/views/index'
import Info from '@/views/info'
import Useradd from '@/views/user/useradd'
import Userupdate from '@/views/user/userupdate'
import Userlist from '@/views/user/userlist'
import Productlist from '@/views/product/productlist'
import Productadd from '@/views/product/productadd'
import Productupdate from '@/views/product/productupdate'
import store from '../store/store'
Vue.use(Router)
let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      hidden: true
    },
    {
      path: '/index',
      name: '用户管理',
      iconCls: 'el-icon-menu',
      component: Index,
      children: [
        {
          path: '/useradd',
          name: '添加用户',
          component: Useradd,
          iconCls: 'el-icon-menu'
        },
        {
          path: '/userlist',
          name: '用户列表',
          component: Userlist,
          iconCls: 'el-icon-menu'
        },
        {
          path: '/userupdate',
          name: 'Userupdate',
          component: Userupdate,
          hidden: true
        }]},
        {
          path: '/index',
          name: '商品管理',
          iconCls: 'el-icon-menu',
          component: Index,
          children: [
            {
              path: '/productadd',
              name: '添加商品',
              component: Productadd,
              iconCls: 'el-icon-menu'
            },
            {
              path: '/productlist',
              name: '商品列表',
              component: Productlist,
              iconCls: 'el-icon-menu'
            },
            {
              path: '/productupdate',
              name: 'Productupdate',
              component: Productupdate,
              hidden: true
            }
          ]
        }
      ]
    })
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next();
    return;
  }
  // let user=sessionStorage.getItem('user');
  let user = store.getters.getUser;
  if (user) {
    next();
    return;
  }
  next({ path: '/' })
})
export default router;