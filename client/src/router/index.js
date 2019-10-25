import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/components/Dashboard";
import BadGateway from "@/components/BadGateway";
import Intro from "@/components/Intro";
import ProfileForm from "@/components/ProfileForm";
import AttackingMidfielder from "@/components/AttackingMidfielder";
import CenterBack from "@/components/CenterBack";
import MenuPage from "@/components/MenuPage";
import test from "@/components/test";
import FullBack from "@/components/FullBack";
import Goalkeeper from "@/components/Goalkeeper";
import HoldmidFielder from "@/components/HoldmidFielder";
import Striker from "@/components/Striker";
import WidemidFielder from "@/components/WidemidFielder";
import AmidView from "@/components/AmidView";
import CenterView from "@/components/CenterView";
import FullView from "@/components/FullView";
import GoalkeeperView from "@/components/GoalkeeperView";
import HoldmidView from "@/components/HoldmidView";
import StrikerView from "@/components/StrikerView";
import WidmidView from "@/components/WidmidView";
import RegisterLogin from "@/components/RegisterLogin";

/* eslint-disable */
Vue.use(Router);

export default new Router({

  routes: [{
      path: "/",
      name: "App",
      component: Intro,
    },

    {
      path: "/404",
      name: "BadGateway",
      component: BadGateway
    },
    {
      path: "/registerlogin",
      name: "RegisterLogin",
      component: RegisterLogin
    },



    {
      path: "/menupage",
      name: "MenuPage",
      component: MenuPage,
      children: [{
          path: "/profile",
          name: "ProfileForm",
          component: ProfileForm
        },
        {
          path: "/dashboard",
          name: "Dashboard",
          component: Dashboard
        },
        {
          path: "/attackingmidfielder",
          name: "AttackingMidfielder",
          component: AttackingMidfielder
        },
        {
          path: "/centerback",
          name: "CenterBack",
          component: CenterBack
        },
        {
          path: "/fullback",
          name: "FullBack",
          component: FullBack
        },
        {
          path: "/goalkeeper",
          name: "Goalkeeper",
          component: Goalkeeper
        },
        {
          path: "/holdmidfielder",
          name: "HoldmidFielder",
          component: HoldmidFielder
        },
        {
          path: "/striker",
          name: "Striker",
          component: Striker
        },
        {
          path: "/widemidfielder",
          name: "WidemidFielder",
          component: WidemidFielder
        },
        {
          path: "/attackingmidview",
          name: "AmidView",
          component: AmidView
        },
        {
          path: "/centerview",
          name: "CenterView",
          component: CenterView
        },
        {
          path: "/fullview",
          name: "FullView",
          component: FullView
        },
        {
          path: "/goalkeeperview",
          name: "GoalkeeperView",
          component: GoalkeeperView
        },
        {
          path: "/holdmidview",
          name: "HoldmidView",
          component: HoldmidView
        },
        {
          path: "/strikerview",
          name: "StrikerView",
          component: StrikerView
        },
        {
          path: "/widmidview",
          name: "WidmidView",
          component: WidmidView
        }




      ]
    },
    {
      path: "/test",
      name: "test",
      component: test
    }

  ]
});