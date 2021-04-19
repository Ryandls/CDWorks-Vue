import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
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
    meta: { protected: true },
  },
  {
    path: "/profile/:userId",
    component: () => import("../views/Profile"),
    meta: { protected: true },
    children: [
      {
        path: "",
        component: () => import("../views/parts/ProfileHome"),
        meta: { protected: true },
      },
      {
        path: "skills",
        component: () => import("../views/parts/ProfileSkills"),
        meta: { protected: true },
      },
      {
        path: "portfolios",
        component: () => import("../views/parts/ProfilePortfolios"),
        meta: { protected: true },
      },
      {
        path: "pic",
        component: () => import("../views/parts/ProfilePic"),
        meta: { protected: true },
      },
    ],
  },
  {
    path: "/jobs/:id/show",
    name: "JobsShow",
    component: () => import("../views/JobsView"),
    meta: { protected: true },
  },
  {
    path: "/jobs/new",
    name: "JobsNew",
    component: () => import("../views/JobsNew"),
    meta: { protected: true },
  },
  {
    path: "/jobs/:id/edit",
    name: "JobsEdit",
    component: () => import("../views/JobsEdit"),
    meta: { protected: true },
  },
  {
    path: "/jobs/:id/application/new",
    name: "ApplicationNew",
    component: () => import("../views/ApplicationNew"),
    meta: { protected: true },
  },
  {
    path: "/jobs/:id/application/:applicationId/edit",
    name: "ApplicationEdit",
    component: () => import("../views/ApplicationEdit"),
    meta: { protected: true },
  },
];

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
});

export default router;
