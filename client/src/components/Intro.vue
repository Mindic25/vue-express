<template>
  <div class="video-background-page"> 
    <mdb-navbar style="margin-top: 0px" color="primary" position="top" dark href="#" transparent scrolling>
      <mdb-container>
        <mdbNavbarBrand href="#"><strong>MDB</strong></mdbNavbarBrand>
        <mdb-navbar-toggler style="max-width: 1140px">
          <mdb-navbar-nav left>
            <mdb-nav-item href="#" waves-fixed>Home</mdb-nav-item>
            <mdb-nav-item href="#" waves-fixed>About</mdb-nav-item>
            <mdb-nav-item href="#" waves-fixed>Features</mdb-nav-item>
            <mdb-nav-item href="#" waves-fixed>Services</mdb-nav-item>
            <mdb-nav-item href="#" waves-fixed>Opinions</mdb-nav-item>
            <mdb-nav-item href="#" waves-fixed>Team</mdb-nav-item>
            <mdb-nav-item href="#" waves-fixed>Contact</mdb-nav-item>
          </mdb-navbar-nav>
          
        </mdb-navbar-toggler>
      </mdb-container>
    </mdb-navbar>

    <view-wrapper src="https://mdbootstrap.com/img/video/animation.mp4" video>
      <mdb-mask class="d-flex justify-content-center align-items-center gradient">
        <mdb-container class="px-md-1 px-sm-0" style="margin-left:160px">
          <mdb-row>
            <mdb-col md="7" class="mb-3 white-text text-center animated fadeIn">
              <h3 class="display-3 font-weight-bold mb-0 pt-md-5 ">Creative Agency </h3>
              <hr class="hr-light my-4 w-75 "/>
              <h4 class="subtext-header mt-2 mb-4" >Lorem ipsum dolor sit amet, consectetur adipisicing elit deleniti consequuntur nihil.</h4>
              <mdb-btn tag="a" role="button" outline="white" rounded color="white"><mdb-icon icon="home"/><router-link to="/registerlogin"> Visit us</router-link></mdb-btn>
            </mdb-col>
          </mdb-row>
        </mdb-container>
      </mdb-mask>
    </view-wrapper>

   
  </div>
</template>
<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  ViewWrapper,
  mdbMask,
  mdbBtn,
  mdbIcon,
  mdbNavbar,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbNavbarBrand,
  mdbCard
} from "mdbvue";
export default {
  name: "VideoBackgroundPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    ViewWrapper,
    mdbMask,
    mdbBtn,
    mdbIcon,
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavbarBrand,
    mdbCard
  }
};
</script>
<style>
.video-background-page .gradient {
  background: -moz-linear-gradient(
    45deg,
    rgba(75, 255, 59, 0.7),
    rgba(56, 198, 13, 0.69) 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    rgba(15, 213, 187, 0.6),
    rgba(13, 198, 173, 0.69) 100%
  );
  background: linear-gradient(
    45deg,
    rgba(15, 213, 203, 0.6),
    rgba(13, 198, 127, 0.644) 100%
  );
}

.video-background-page .view video {
  top: 0 !important;
  left: 0 !important;
  transform: none !important;
  height: calc(110vh - 70px);
}

.video-background-page .navbar {
  transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
}

.top-nav-collapse {
  background-color: #563e91 !important;
}
</style>