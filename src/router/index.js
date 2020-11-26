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
import Finish from '../views/Finish.vue';
import GuideList from '../views/GuideList.vue';
import GuideView from '../views/GuideView.vue';
import OrderGuide from '../views/orderGuide.vue';
import PointGuide from '../views/pointGuide.vue';
import ModalTest from '../views/modalTest.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/modalTest',
    name: 'modalTest',
    component: ModalTest,
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
    meta:{
      title:'휴대전화번호 입력',
      subTitle:'포인트 충전 및 적립을 위한 전화번호를 입력해주세요'
    }
  },
  {
    path: '/orderGuide',
    name: 'orderGuide',
    component: OrderGuide,
  },
  {
    path: '/Product',
    name: 'Product',
    component: Product,
    meta:{
      title:'장비 및 상품선택',
      subTitle:'사용하실 장비와 상품을 선택해주세요'
    }
  },
  {
    path: '/Point',
    name: 'Point',
    component: Point,
    meta:{
      title:'포인트 충전하기',
      subTitle:'필요하신 금액을 선택 후 결제해주세요'
    }
  },
  {
    path: '/pointGuide',
    name: 'pointGuide',
    component: PointGuide,
  },
  {
    path: '/Credit',
    name: 'Credit',
    component: Credit,
    meta:{
      title:'포인트 충전방법 선택',
    }
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: Detail,
    meta:{
      title:'서비스확인 및 포인트사용',
      subTitle:'선택하신 서비스와 결제금액을 확인해주세요'
    }
  },
  {
    path: '/Finish',
    name: 'Finish',
    component: Finish,
  },
  {
    path: '/GuideList',
    name: 'GuideList',
    component: GuideList,
    meta:{
      title:'이용안내',
      subTitle:'궁금하신 장비의 메뉴얼을 선택해주세요'
    }
  },
  {
    path: '/GuideView',
    name: 'GuideView',
    component: GuideView,
    props: route => ({
      type: route.params.type, // 가이드 종류
      done: route.params.done, // 다음 또는 이전
    }),
    meta:{
      title:'이용안내',
      subTitle:'궁금하신 장비의 메뉴얼을 선택해주세요'
    }
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
