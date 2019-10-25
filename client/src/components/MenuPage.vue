<template>
 <section id="menupage ">
<BootstrapSideBar :sidenavConfig="sidenavConfig" :header="header" :hasNavbar="hasNavbar" :links="sidelinks" :navs="headerLinks " style="margin-left:-15px;width: 1900px;margin-top: 0px; height:1000px">
    <main class="page-content">
   
            <router-view/>
       
    </main>
</BootstrapSideBar>
       
 </section>
       
</template>
<script>
import BootstrapSideBar from "b-sidebar";

export default {
  name: "MenuPage",
  components: {
    BootstrapSideBar
  },
  data() {
    return {
      sidenavConfig: {
        sidenavMainColor: "default-color-dark",
        sidenavBgColor: "navbar-dark",
        navbarClass: "custom-one",
        sidenavClass: "sidenav-custom-class"
      },
      header: {
        title: "Home",
        href: "menupage"
      },
      hasNavbar: true,
      headerLinks: [
        {
          label: "Management",
          href: "#",
          navs: [
            { label: "Logout", href: "/" }
            // { label: "About Us 2", href: "#" }
          ]
        }
      ],
      sidelinks: [
        {
          label: "Create",
          href: "#",
          icon: "fa-bell-o",
          links: [
            { label: "Attacking Mid-fielder ", href: "#/attackingmidfielder" },
            { label: "Center Back", href: "#/centerback" },
            { label: "Full Back", href: "#/fullback" },
            { label: "GoalKeeper", href: "#/goalkeeper" },
            { label: "Holding Mid-fielder", href: "#/holdmidfielder" },
            { label: "Striker", href: "#/striker" },
            { label: "Wide Mid-fielder", href: "#/widemidfielder" }
          ]
        },
        {
          label: "View",
          href: "#",
          icon: "fa-bell-o",
          links: [
            { label: "Attacking Mid-fielder", href: "#/attackingmidview" },
            { label: "Center Back", href: "#/centerview" },
            { label: "Full Back", href: "#/fullview" },
            { label: "GoalKeeper", href: "#/goalkeeperview" },
            { label: "Holding Mid-fielder", href: "#/holdmidview" },
            { label: "Striker", href: "#/strikerview" },
            { label: "Wide Mid-fielder", href: "#/widmidview" }
          ]
        },
        {
          label: "Edit",
          href: "#",
          icon: "fa-bell-o",
          links: [
            { label: "Player", href: "/about" },
            { label: "Training", href: "#" },
            { label: "Session", href: "#" }
          ]
        },
        {
          label: "Training",
          href: "#",
          icon: "fa-bell-o",
          links: [
            { label: "Sessions", href: "#/dashboard" },
            { label: "Exercise", href: "#" }
          ]
        }
      ]
    };
  }
};
</script>
<style scoped>
.sidenav-custom-class {
  min-width: 260px !important;
  max-width: 260px !important;
}
</style>


