import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/Dashboard"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
