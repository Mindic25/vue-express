import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/components/Dashboard";
import BadGateway from "@/components/BadGateway";
import Intro from "@/components/Intro";

Vue.use(Router);

export default new Router({

  routes: [{
      path: "/",
      name: "App",
      component: Intro,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/404",
      name: "BadGateway",
      component: BadGateway
    }
  ]
});