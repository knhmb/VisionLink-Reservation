import { createRouter, createWebHistory } from "@ionic/vue-router";

import CreateAccount from "../pages/CreateAccount.vue";
import Tabs from "../components/Tabs.vue";

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/create-account",
    name: "CreateAccount",
    component: CreateAccount,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../pages/Login.vue"),
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: () => import("../pages/ForgotPassword.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("../pages/Projects.vue"),
    // beforeEnter(to, from, next) {
    //   const isAuthenticated = localStorage.getItem("accessToken");
    //   if (isAuthenticated) {
    //     next();
    //     return;
    //   }
    //   next("/");
    // },
  },
  {
    path: "/projects/:id",
    name: "ProjectsDetail",
    component: () => import("../pages/ProjectsDetail.vue"),
    // beforeEnter(to, from, next) {
    //   const isAuthenticated = localStorage.getItem("accessToken");
    //   if (isAuthenticated) {
    //     next();
    //     return;
    //   }
    //   next("/");
    // },
  },
  {
    path: "/rennovation-schedule",
    name: "RennovationSchedule",
    component: () => import("../pages/RennovationSchedule.vue"),
    // beforeEnter(to, from, next) {
    //   const isAuthenticated = localStorage.getItem("accessToken");
    //   if (isAuthenticated) {
    //     next();
    //     return;
    //   }
    //   next("/");
    // },
  },
  {
    path: "/rennovation-schedule-in-progress",
    name: "RennovationInProgress",
    component: () => import("../pages/RennovationScheduleInProgress.vue"),
    // beforeEnter(to, from, next) {
    //   const isAuthenticated = localStorage.getItem("accessToken");
    //   if (isAuthenticated) {
    //     next();
    //     return;
    //   }
    //   next("/");
    // },
  },
  {
    path: "/rennovation-schedule-pending",
    name: "RennovationPending",
    component: () => import("../pages/RennovationSchedulePending.vue"),
    // beforeEnter(to, from, next) {
    //   const isAuthenticated = localStorage.getItem("accessToken");
    //   if (isAuthenticated) {
    //     next();
    //     return;
    //   }
    //   next("/");
    // },
  },
  {
    path: "/reservation",
    name: "Reservation",
    component: () => import("../pages/Reservation.vue"),
    beforeEnter(to, from, next) {
      const isAuthenticated = localStorage.getItem("accessToken");
      if (isAuthenticated) {
        next();
        return;
      }
      next("/");
    },
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../pages/Account.vue"),
    beforeEnter(to, from, next) {
      const isAuthenticated = localStorage.getItem("accessToken");
      if (isAuthenticated) {
        next();
        return;
      }
      next("/");
    },
  },
  {
    path: "/edit-profile",
    name: "EditProfile",
    component: () => import("../pages/EditProfile.vue"),
    beforeEnter(to, from, next) {
      const isAuthenticated = localStorage.getItem("accessToken");
      if (isAuthenticated) {
        next();
        return;
      }
      next("/");
    },
  },
  {
    path: "/change-password",
    name: "ChangePassword",
    component: () => import("../pages/ChangePassword.vue"),
    beforeEnter(to, from, next) {
      const isAuthenticated = localStorage.getItem("accessToken");
      if (isAuthenticated) {
        next();
        return;
      }
      next("/");
    },
  },
  {
    path: "/reservation-history",
    name: "ReservationHistory",
    component: () => import("../pages/ReservationHistory.vue"),
    beforeEnter(to, from, next) {
      const isAuthenticated = localStorage.getItem("accessToken");
      if (isAuthenticated) {
        next();
        return;
      }
      next("/");
    },
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicy",
    component: () => import("../pages/PrivacyPolicy.vue"),
  },
  {
    path: "/terms-conditions",
    name: "TermsConditions",
    component: () => import("../pages/TermsConditions.vue"),
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: () => import("../pages/AboutUs.vue"),
    beforeEnter(to, from, next) {
      const isAuthenticated = localStorage.getItem("accessToken");
      if (isAuthenticated) {
        next();
        return;
      }
      next("/");
    },
  },
  {
    path: "/contact-us",
    name: "ContactUs",
    component: () => import("../pages/ContactUs.vue"),
    beforeEnter(to, from, next) {
      const isAuthenticated = localStorage.getItem("accessToken");
      if (isAuthenticated) {
        next();
        return;
      }
      next("/");
    },
  },
  {
    path: "/tabs/",
    component: Tabs,
    children: [
      {
        path: "tab1",
        component: () => import("../pages/CreateAccount.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
