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
  {
    path: "/profile/:userId",
    component: () => import("../views/Profile"),
    children: [
      {
        path: "",
        component: () => import("../views/parts/ProfileHome"),
      },
      {
        path: "skills",

        component: () => import("../views/parts/ProfileSkills"),
      },
      {
        path: "portfolios",

        component: () => import("../views/parts/ProfilePortfolios"),
      },
      {
        path: "pic",

        component: () => import("../views/parts/ProfilePic"),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
