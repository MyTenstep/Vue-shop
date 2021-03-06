import Vue from 'vue';
import Router from 'vue-router';
import Msite from '../pages/Msite/Msite.vue';
import Order from '../pages/Order/Order.vue';
import Search from '../pages/Search/Search.vue';
import Porfile from '../pages/Profile/Profile.vue';
import Login from '../pages/login/login.vue';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter: true
      }
    }, {
      path: '/search',
      component: Search,
      meta: {
        showFooter: true
      }
    }, {
      path: '/profile',
      component: Porfile,
      meta: {
        showFooter: true
      }
    }, {
      path: '/login',
      component: Login
    }, {
      path: '/',
      redirect: '/msite',
      meta: {
        showFooter: true
      }
    }
  ]
});
