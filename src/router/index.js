import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Main from '../views/Main.vue';
import Phone from '../views/Phone.vue';
import Product from '../views/Product.vue';
import Point from '../views/Point.vue';
import Credit from '../views/Credit.vue';
import Detail from '../views/Detail.vue';
import Complete from '../views/Complete.vue';
import GuideList from '../views/GuideList.vue';
import GuideView from '../views/GuideView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/Main',
    name: 'Main',
    component: Main,
  },
  {
    path: '/Phone',
    name: 'Phone',
    component: Phone,
  },
  {
    path: '/Product',
    name: 'Product',
    component: Product,
  },
  {
    path: '/Point',
    name: 'Point',
    component: Point,
  },
  {
    path: '/Credit',
    name: 'Credit',
    component: Credit,
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/Complete',
    name: 'Complete',
    component: Complete,
  },
  {
    path: '/GuideList',
    name: 'GuideList',
    component: GuideList,
  },
  {
    path: '/GuideView',
    name: 'GuideView',
    component: GuideView,
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
