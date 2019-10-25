<template>
     <mdb-container fluid>
             <mdb-row >
        <div style="margin-left: 800px; margin-top: 400px">
                   <mdb-btn rounded color="default" @click.native="cascading = true">register / login<mdb-icon icon="eye" class="ml-1"/></mdb-btn>
                      <mdb-modal :show="cascading" @close="cascading = false" cascade tabs>
                       <mdb-tab tabs justify class="success-color-dark darken-3">
                        <mdb-tab-item :active="tabs==1" @click.native.prevent="tabs = 1"><mdb-icon icon="user" class="mr-1"/>Login</mdb-tab-item>
                        <mdb-tab-item :active="tabs==2" @click.native.prevent="tabs = 2"><mdb-icon icon="user-plus" class="mr-1"/>Register</mdb-tab-item>
                       </mdb-tab>
                       <form @submit.prevent="signin">
                       <mdb-modal-body class="mx-3" v-if="tabs==1">
                        <div v-if="errorMessage" class="alert alert-danger" role="alert"> a simple alert-check it out</div>
                        <mdb-input v-model="profile.email" label="Your email"  id="email" icon="envelope" type="email" class="mb-5"/>
                        <mdb-input v-model="profile.password" label="Your password" id="password" icon="lock" type="password"/>
                        <div style="margin-left:130px">
                        <mdb-btn color="success-color-dark"><router-link to="/menupage">Log in</router-link> <mdb-icon icon="sign-in-alt" class="ml-1"/></mdb-btn>
                         </div>
                        </mdb-modal-body>
                        
                        <mdb-modal-footer center v-if="tabs==1">
                        <div class="options text-md-right ">
                        <p>Not a member? <a href="#" @click="tabs=2">Sign Up</a></p>
                        <p>Forgot <a href="#">Password?</a></p>
                        </div>
                        <mdb-btn outline="info" class="ml-auto" @click.native="cascading=false">Close</mdb-btn>
                         </mdb-modal-footer>
                         </form>

                        <form @submit.prevent="register">       
                       <mdb-modal-body class="mx-3" v-if="tabs==2">
                         <div v-if="errorMessage" class="alert alert-danger" role="alert"> {{errorMessage }}</div>
                        <mdb-input size="sm" v-model="profile.first" label="Your First Name" id="first" icon="registered" type="text" validate error="wrong" success="right" required />
                        <mdb-input size="sm" v-model="profile.last" label="Your Last Name" id="last" icon="registered" type="text" validate error="wrong" success="right" required  />
                        <mdb-input size="sm" v-model="profile.email" label="Your email" id="email" icon="envelope" type="email" validate error="wrong" success="right" required   />

                        <mdb-input size="sm" v-model="profile.password" label="Your password" id="password" icon="lock" type="password" validate error="wrong" success="right" required/>
                        <mdb-input size="sm" v-model="profile.confirmpassword"  label="Repeat password" id="confirmpassword" icon="lock" type="password" validate error="wrong" success="right" required/>
                        <div class="mt-2" style="margin-left:130px">
                        <mdb-btn type="submit" color="success-color-dark">Sign Up<mdb-icon icon="sign-in-alt" class="ml-1"/></mdb-btn>
                        </div>
                        </mdb-modal-body>
                         </form> 
                        <mdb-modal-footer center v-if="tabs==2">
                                <div class="options text-md-right mt-1">
                                <p>Already have an account? <a href="#" @click="tabs=1">Log in</a></p>
                                </div>
                                <mdb-btn outline="info" class="ml-auto" @click.native="cascading=false">Close</mdb-btn>
                        </mdb-modal-footer>
                           
                </mdb-modal>
                
        </div>
        </mdb-row>
        </mdb-container>
</template>
<script>
import axios from "axios";
import Joi from "joi";

const schema = Joi.object().keys({
  first: Joi.string()
    .alphanum()
    .min(3)
    .max(15)
    .required(),
  last: Joi.string()
    .alphanum()
    .min(3)
    .max(15)
    .required(),

  password: Joi.string()
    .min(8)
    .required(),
  confirmpassword: Joi.string()
    .min(8)
    .required(),
  email: Joi.string()
    .email({
      minDomainAtoms: 2,
    })
    .required(),
});

import {
  mdbContainer,
  mdbBtn,
  mdbRow,
  mdbModal,
  mdbTab,
  mdbTabItem,
  mdbModalBody,
  mdbInput,
  mdbModalFooter,
  mdbModalTitle,
  mdbIcon,
} from "mdbvue";
export default {
  name: "RegisterLogin",
  components: {
    mdbContainer,
    mdbRow,
    mdbBtn,
    mdbModal,
    mdbTab,
    mdbTabItem,
    mdbModalBody,
    mdbInput,
    mdbModalFooter,
    mdbIcon,
    mdbModalTitle,
    mdbModalTitle,
  },
  data() {
    return {
      cascading: false,
      tabs: 1,
      registering: false,
      errorMessage: "",
      profile: {
        first: "",
        last: "",
        email: "",
        password: "",
        confirmpassword: "",
      },
    };
  },
  watch: {
    profile: {
      handler() {
        this.errorMessage = "";
      },
      deep: true,
    },
  },

  methods: {
    register() {
      this.errorMessage = "";
      if (this.validUser()) {
        const body = {};
        this.registering = true;
        axios
          .post("http://localhost:4241/auth/signup", {
            first: this.profile.first,
            last: this.profile.last,
            email: this.profile.email,
            password: this.profile.password,
          })
          .then(response => {
            console.log("success");
            this.$router.push("/menupage");
          })
          .catch(error => {
            console.log(error.response);
            this.$router.push("/404");
          });
      }
    },
    validUser() {
      if (this.profile.password !== this.profile.confirmpassword) {
        this.errorMessage = "Passwords must match. 🙈";
        return false;
      }
      const result = Joi.validate(this.profile, schema);
      if (result.error === null) {
        return true;
      }
      if (result.error.message.includes("email")) {
        this.errorMessage = "Username already exists. 😭";
      } else {
        this.errorMessage = "Password is invalid. 🙈";
      }
      return false;
    },
  },
};
</script>
