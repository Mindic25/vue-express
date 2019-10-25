<template>
<section id="centerback">
  <form class="" novalidate @submit= "checkForm">  
    <mdb-card style="width: 1600px ; height: 89rem ; margin-left: 10px; margin-top: 10px">
    <mdb-card-body>
     
  <!-- Grid row -->
  <div class="card" style="width: 97rem;">
  <div class="card-body">
  <div class="form-row">
    <!-- Default input -->
    
    <div class="form-group col-md-6">
      <label for="first">First Name</label>
      <input type="text" class="form-control" id="first" v-model="first" placeholder="Enter your first name">
    </div>
    <!-- Default input -->
    <div class="form-group col-md-6">
      <label for="input4">Height</label>
      <input type="password" class="form-control" id="input4" placeholder="Enter the Height">
    </div>
  </div>
  <!-- Grid row -->

  <!-- Default input -->
  <div class="form-row">
  <div class="form-group col-md-6">
    <label for="last">Last Name</label>
    <input type="text" class="form-control" id="last" v-model="last" placeholder="Enter your last name">
  </div>
  <!-- Default input -->
  <div class="form-group col-md-6">
    <label for="inputAddress2">Address </label>
    <input type="text" class="form-control" id="inputAddress2"  placeholder="Apartment, studio, or floor">
  </div>
  </div>
  <!-- Grid row -->
  <div class="form-row">
    <!-- Default input -->
    <div class="form-group col-md-6">
      <label for="DOB">Date of Birth</label>
      <input type="text" class="form-control" id="DOB" v-model="DOB" placeholder="Enter your Date of Birth">
    </div>
    <!-- Default input -->
    <div class="form-group col-md-3">
      <label for="inputZip">Zip</label>
      <input type="text" class="form-control" id="inputZip" placeholder="Enter the your zip code">
    </div>
  </div>
  <!-- Grid row -->
   <!-- Grid row -->
  <div class="form-row">
    <!-- Default input -->
    <div class="form-group col-md-6">
      <label for="phone">Phone Number</label>
      <input type="text" class="form-control" id="phone" v-model="phone" placeholder="Enter your Phone Number">
    </div>
    <!-- Default input -->
    <div class="form-group col-md-6">
      <label for="inputPassword4">Email Address</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Enter your Email">
    </div>
  </div>
  <!-- Grid row -->
 </div>
</div>
<!-- ****************************************************** -->
<div class="card" style="width: 97rem; ">
  <div class="card-body">
   <div class="form-row">
    
    <!-- Physiology input -->
    <div class="card" style="width: 18rem;margin-left:5px">
      <div class="card-body">
          <h4 class="card-title">Pysiology</h4>
          <div class="form-group col-md-6">
          <label for="stamina">Stamina</label>
          <input type="text" id="stamina" v-model="stamina" class="form-control form-control-sm">
       </div>

      <div class="form-group col-md-6">
       <label for="strength">Strength</label>
       <input type="text" id="strength" v-model="strength" class="form-control form-control-sm">
       </div>

      <div class="form-group col-md-6">
      <label for="power">Power</label>
      <input type="text" id="power" v-model="power" class="form-control form-control-sm">
      </div>
      
      <div class="form-group col-md-6">
      <label for="speed">Speed</label>
      <input type="text" id="speed" v-model="speed" class="form-control form-control-sm">
      </div>
      </div>
    </div>

    <!-- Tactical input -->
    <div class="card" style="width: 18rem;margin-left:5px">
      <div class="card-body">
        <h4 class="card-title">Tactical</h4>
            <div class="form-group col-md-6">
             <label for="vision">Vision</label>
             <input type="text" id="vision" v-model="vision" class="form-control form-control-sm">
            </div>

    <div class="form-group col-md-6">
      <label for="organisation">Organisation</label>
      <input type="text" id="organisation" v-model="organisation" class="form-control form-control-sm">
    </div>
    <div class="form-group col-md-6">
     <label for="communication">Communication</label>
    <input type="text" id="communication" v-model="communication" class="form-control form-control-sm">
    </div>
     <div class="form-group col-md-6">
     <label for="passing">Passing</label>
    <input type="text" id="passing" v-model="passing" class="form-control form-control-sm">
    </div>
    
      </div>
    </div>

    <!-- Technical Attacking input -->
    <div class="card" style="width: 17rem;margin-left:5px">
      <div class="card-body">
        <h4 class="card-title">Technical-Attacking</h4>
        

          
          <div class="form-group col-md-6">
           <label for="ball_control_with_feet">Running off the Ball</label>
           <input type="text" id="running_of_the_ball" v-model="running_of_the_ball" class="form-control form-control-sm">
         </div>
          <div class="form-group col-md-6">
            <label for="dribbling">Dribbling</label>
             <input type="text" id="dribbling" v-model="dribbing" class="form-control form-control-sm">
          </div>
          <div class="form-group col-md-6">
            <label for="support_play">Support Play</label>
            <input type="text" id="support_play" v-model="support_play" class="form-control form-control-sm">
         </div>

          <div class="form-group col-md-6">
            <label for="crossing">Crossing</label>
            <input type="text" id="crossing" v-model="crossing" class="form-control form-control-sm">
          </div>
          <div class="form-group col-md-6">
            <label for="shooting">Shooting</label>
            <input type="text" id="shooting" v-model="shooting" class="form-control form-control-sm">
          </div>
          <div class="form-group col-md-6">
           <label for="off_heading">Offensive Heading</label>
           <input type="text" id="off_heading" v-model="off_heading" class="form-control form-control-sm">
           </div>
      </div>
    </div>

    <!-- Technical Defence input -->
    <div class="card" style="width: 18rem;margin-left:5px">
      <div class="card-body">
        <h4 class="card-title">Technical-Defence</h4>
        <div class="form-group col-md-6">
            <label for="tackle">Tackling</label>
            <input type="text" id="tackle" v-model="tackle" class="form-control form-control-sm">
        </div>

         <div class="form-group col-md-6">
           <label for="pressing_opposition">Pressing Opposition</label>
           <input type="text" id="pressing_opposition" v-model="pressing_opposition" class="form-control form-control-sm">
          </div>
          <div class="form-group col-md-6">
              <label for="interception_anticipation">Interception Anticipation</label>
              <input type="text" id="interception_anticipation" v-model="interception_anticipation" class="form-control form-control-sm">
          </div>
          <div class="form-group col-md-6">
            <label for="def_heading">Defensive Heading</label>
             <input type="text" id="def_heading" v-model="def_heading" class="form-control form-control-sm">
          </div>
           <div class="form-group col-md-6">
            <label for="clearance">clearance</label>
             <input type="text" id="clearance" v-model="clearance" class="form-control form-control-sm">
          </div>
      </div>
    </div>

    <!-- Phychological input -->
    <div class="card" style="width: 18rem;margin-left:5px">
      <div class="card-body">
        <h4 class="card-title">Phychological</h4>
        <div class="form-group col-md-6">
        <label for="concentration">Concentration</label>
        <input type="text" id="concentration" v-model="concentration" class="form-control form-control-sm">
      </div>
    <!-- Default input -->
    <div class="form-group col-md-6">
      <label for="motivation">Motivation</label>
      <input type="text" id="movitation" v-model="motivation" class="form-control form-control-sm">
    </div>
    <div class="form-group col-md-6">
     <label for="attitude">Attitude</label>
     <input type="text" id="attitude" v-model="attitude" class="form-control form-control-sm">
    </div>
    <div class="form-group col-md-6">
       <label for="body_Language">Body Language</label>
      <input type="text" id="body_Language" v-model="body_Language" class="form-control form-control-sm">
    </div>
      </div>
    </div>



 </div>
</div>
</div>


  
  
  <mdb-row style="margin-top:5px">
    <mdb-card style="width: 1800px; margin-left:0px; ">
      <mdb-card-body>
        <div class="text-center">
      <mdb-btn type="submit" @click="createCenterBack">Submit</mdb-btn>
      </div>
       </mdb-card-body>
    </mdb-card>
  </mdb-row>
    </mdb-card-body>
  </mdb-card>
  </form>
  </section>        
</template>
<script>
import {
  mdbInput,
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbBtn,
  mdbCardHeader
} from "mdbvue";
import axios from "axios";
export default {
  name: "CenterBack",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbCardHeader,
    mdbCardTitle,
    mdbInput,
    mdbCardText,
    mdbBtn
  },
  data() {
    return {
      first: "",
      last: "",
      DOB: "",
      phone: "",
      /* physiology  */
      stamina: "",
      strength: "",
      power: "",
      speed: "",
      /* Tactical */
      vision: "",
      organisation: "",
      communication: "",
      passing: "",
      /*  Technical_Att */
      running_with_the_ball: "",
      dribbing: "",
      support_play: "",
      crossing: "",
      shooting: "",
      off_heading: "",
      /* Technical_Def */
      tackle: "",
      pressing_opposition: "",
      interception_anticipation: "",
      def_heading: "",
      clearance: "",
      /*Psychological */
      concentration: "",
      motivation: "",
      attitude: "",
      body_Language: ""
    };
  },
  methods: {
    checkForm(event) {
      event.preventDefault();
      event.target.classList.add("was-validated");
    },
    createCenterBack() {
      axios
        .post("http://localhost:4241/users/profileID/centerback", {
          first: this.first,
          last: this.last,
          DOB: this.DOB,
          phone: this.phone,

          stamina: this.stamina,
          strength: this.strength,
          power: this.power,
          speed: this.speed,

          vision: this.vision,
          organisation: this.organisation,
          communication: this.communication,

          passing: this.passing,
          running_with_the_ball: this.running_with_the_ball,
          ball_control_with_feet: this.ball_controll_with_feet,
          dribbing: this.dribbing,
          support_play: this.support_play,
          crossing: this.crossing,
          shooting: this.shooting,
          off_heading: this.off_heading,

          tackle: this.tackle,
          pressing_opposition: this.pressing_opposition,
          interception_anticipation: this.interception_anticipation,
          def_heading: this.def_heading,

          concentration: this.concentration,
          motivation: this.motivation,
          attitude: this.attitude,
          body_Language: this.body_Language
        })
        .then(response => {
          console.log(createAttackingMidfield);
        })
        .catch(e => {
          console.error(e);
        });
      this.$router.push("menupage");
    }
  }
};
</script>
<style>
#centerback {
  height: 1500px;
  width: 1700px;
  padding-top: 0px;
  margin-left: 0px;
}
</style>