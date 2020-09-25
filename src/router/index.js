import Vue from 'vue'
import VueRouter from 'vue-router'
// import firebase from 'firebase';

import Home from '../views/Home.vue';
import app2 from '../views/app2.vue';
import test from '../views/test';
import finance from '../views/finance';
import map from '../views/map';
import model from '../views/model';
import Photographer from '../views/Photographer';
import report from '../views/report';
import UserProfile from '../views/UserProfile';



import login from '../views/login.vue';
Vue.use(VueRouter)
  const routes = [
    {
      path: '/finance',
      name: 'finance',
      component: finance,
    },
    {
      path: '/map',
      name: 'map',
      component: map,
    },
    {
      path: '/model',
      name: 'model',
      component: model,
    },
    {
      path: '/Photographer',
      name: 'Photographer',
      component: Photographer,
    },
    {
      path: '/report',
      name: 'report',
      component: report,
    },
    {
      path: '/UserProfile',
      name: 'UserProfile',
      component: UserProfile,
    },

  {
    
      path: '/home',
      name: 'Home',
      component: Home,


    },
    {
      path: '/app2.vue',
      name: 'app2',
      component: app2
    },
  
 
    {
      path: '/',
      name: 'login',
      component: login,
  
    },

    {
      path: '/test',
      name: 'test',
      component: test,

    },

   



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




export default router
