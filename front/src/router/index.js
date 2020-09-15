import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/Home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/Interview",
    name: "Interview",
    component: () => import("../views/Interview.vue"),
  },
  {
    path: "/MyPage",
    name: "MyPage",
    component: () => import("../views/MyPage.vue"),
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
