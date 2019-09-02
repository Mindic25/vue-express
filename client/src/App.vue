<template>
  <div id="app">
     <mdb-container fluid>
       <mdb-row>
         <mdb-col>
           <Bar/>
         </mdb-col>
     </mdb-row>  
    <mdb-row>
         <mdb-col>
           <router-view/>

            </mdb-col>
     </mdb-row> 
     <mdb-row >
         <mdb-col>
          <FooterPage/>
        </mdb-col>
     </mdb-row> 
       
     </mdb-container>
     
  </div>
  
</template>

<script>
import { mdbContainer, mdbRow, mdbCol } from "mdbvue";

import ClassicFormPage from "@/components/Intro";
import Bar from "@/components/Bar";
import FooterPage from "@/components/Footer";
import Dashboard from "@/components/Dashboard";
import BadGateway from "@/components/BadGateway";

export default {
  name: "App",
  components: {
    ClassicFormPage,
    Bar,
    FooterPage,
    mdbContainer,
    mdbRow,
    mdbCol,
    Dashboard,
    BadGateway
  }
};
</script>

<style>
/* Extra small devices (portrait phones, less than 576px)
  No media query since this is the default in Bootstrap */

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
}

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
}
</style>
