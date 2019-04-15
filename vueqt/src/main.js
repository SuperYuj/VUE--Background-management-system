// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.1'
import $ from 'jquery';
import axios from 'axios';
import store from './store/store'
import HeadNav from './components/HeadNav';
import asidenav from './components/Asidenav.1';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
 Vue.use(ElementUI);
 Vue.component('HeadNav',HeadNav)
 Vue.component('Asidenav',asidenav)
Vue.prototype.$axios = axios;
// Vue.prototype.$store = store;
Vue.config.productionTip = false

// http request 拦截器
axios.interceptors.request.use(
  config => {
    console.log(' http request 拦截器>>>>');
    const user = store.getters.getUser;
    if (user) { // 判断是否存在token，如果存在的话，则每个http header都加上token
       config.headers.Authorization = `token ${user.token}`;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
});
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
