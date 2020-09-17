import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/main/Main.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/home/Home.vue')
  },
  {
    path: '/interview',
    name: 'Interview',
    component: () => import('../views/interview/Interview.vue')
  },
  {
    path: '/ready',
    name: 'Ready',
    component: () => import('../views/interview/Ready.vue')
  },
  {
    path: "/Login",
    name: "Login",
    component: () => import("../views/user/Login.vue"),
  },
  {
    path: "/Signup",
    name: "Signup",
    component: () => import("../views/user/Signup.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
