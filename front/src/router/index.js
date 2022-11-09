import { createRouter, createWebHistory } from "vue-router";
import Admin from "../views/Admin.vue";
import Dashboard from "../views/Dashboard.vue";
import ManagerDashboard from "../views/ManagerDashboard.vue";
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';

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
      beforeEnter(to, from, next) {
        var isAuthenticated = false;
        if (localStorage.getItem('role') === "admin")
          isAuthenticated = true;
        else
          isAuthenticated = false;
        if (isAuthenticated) {
          next(); // allow to ente
        }
        else {
          next('/'); // go to '/login';
        }
      },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      beforeEnter(to, from, next) {
        var isAuthenticated = false;
        if (localStorage.getItem('role') === "employee")
          isAuthenticated = true;
        else
          isAuthenticated = false;
        if (isAuthenticated) {
          next(); // allow to ente
        }
        else {
          next('/'); // go to '/login';
        }
      },
    },
    {
      path: "/manager-dashboard",
      name: "manager-dashboard",
      component: ManagerDashboard,
      beforeEnter(to, from, next) {
        var isAuthenticated = false;
        if (localStorage.getItem('role') === "manager")
          isAuthenticated = true;
        else
          isAuthenticated = false;
        if (isAuthenticated) {
          next(); // allow to ente
        }
        else {
          next('/'); // go to '/login';
        }
      },
    },
  ],
});

export default router;
