import { createRouter, createWebHistory } from "vue-router";
import Admin from "../views/Admin.vue";
import Dashboard from "../views/Dashboard.vue";
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    }
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
