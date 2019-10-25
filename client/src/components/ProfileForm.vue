<template>
  <section id="ProfileForm">

  <!-- Card -->
  <mdb-card class="profile-card position-relative">
    <mdb-card-body>
      <form>
        <p class="h3 text-center py-1">Player Profile Sign Up</p>
        <div class="grey-text">
          <mdb-input label="First Name" id="first" v-model="first" icon="user" group type="text" validate error="wrong" success="right"/>
          <mdb-input label="Last Name" v-model="last" icon="user" group type="text" validate error="wrong" success="right"/>
          <mdb-input label="Date of Birth" v-model="DOB" icon="user" group type="number" validate error="wrong" success="right"/>
          <mdb-input label="Height" id="height" icon="user" group type="text" validate error="wrong" success="right"/>
          <mdb-input label="Your number" v-model="phone" icon="phone" group type="text" validat success="right"/>
         <!-- <mdb-input label="Confirm your email" icon="exclamation-triangle" group type="text" validate error="wrong" success="right"/> -->
          <select class="browser-default custom-select" multiple v-model="multiSelected">
                <option value="1" selected>Attacking Midfielder</option>
                <option value="2">Centerback</option>
                <option value="3">Goalkeeper</option>
                <option value="4">Fullback</option>
                <option value="5">Holding Midfield</option>
                <option value="6">Wide Midfielder</option>
                <option value="7">Striker</option>
         </select>
        </div>
        <div class="text-center py-4 mt-3">
          <mdb-btn color="cyan" type="submit" @click="createProfile">Next</mdb-btn>
        </div>
      </form>
    </mdb-card-body>
  </mdb-card>
  <!-- Card -->
  </section>
</template>

<script>
import { mdbInput, mdbBtn, mdbCard, mdbCardBody, mdbContainer } from "mdbvue";
import axios from "axios";

export default {
  name: "Profile",
  components: {
    mdbInput,
    mdbBtn,
    mdbCard,
    mdbCardBody,
    mdbContainer
  },
  data() {
    return {
      first: "",
      last: "",
      DOB: "",
      phone: "",
      multiSelected: ["1"]
    };
  },
  methods: {
    createProfile() {
      /* axios
        .post("http://localhost:4241/Users", {
          first: this.first,
          last: this.last,
          DOB: this.DOB,
          phone: this.phone
        })
        .then(response => {
          console.log(createProfile);
        })
        .catch(e => {
          console.error(e);
        });  */

      this.$router.push("attackingmidfielder");

      // this.$router.push("centerback");
    }
  }
};
</script>

<style scoped>
.profile-card {
  height: 700px;
  width: 40rem;
  padding-top: 10px;
  margin-left: 400px;
  margin-top: 70px;
}
</style>