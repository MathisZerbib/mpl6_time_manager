import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    // {
    //   path: "/userboard",
    //   name: "userboard",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../components/user/UserTable.vue"),
    // },

    // {
    //   path: "/newUser",
    //   name: "newUser",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../components/form_user/FormUser.vue"),
    // },

    // {
    //   path: "/workingTime",
    //   name: "workingTime",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../components/working_times/workingTimes.vue"),
    // },
  ],
  linkActiveClass: "active-link",
  linkExactActiveClass: "exact-active-link",
});

export default router;
