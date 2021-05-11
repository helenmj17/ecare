<template>
  <div class="border">
    <Alert v-if="alert" v-bind:message="alert" />
    <!-- <Loginrequest :staffdata="users" /> -->
    <form class="form-signin formsign" @submit.prevent="handleSubmit">
      <div class="text-center">
        <img
          class="mb-9"
          src="../assets/images/logo.png"
          alt=""
          width="150"
          height=""
        />
      </div>
      <h3 class="h3 mb-3 font-weight-normal">Enter the Login Details</h3>
      <label for="inputEmail" class="sr-only">Username</label>
      <input
        type="text"
        v-model="staffid"
        id="inputEmail"
        class="form-control"
        required
        autofocus
      /><br />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        v-model="password"
        id="inputPassword"
        class="form-control"
        required
      />
      <br />
      <div class="text-center">
        <div><button class="button1 button2" type="submit">Submit</button></div>
      </div>
    </form>
  </div>
</template>
<script>
import Alert from "./Alert";
import axios from "axios";

export default {
  name: "Logindetails",
  data() {
    return {
      alert: "",
      staffid: "",
      password: "",
      id: this.$route.params.id,
      userData: {},
    };
  },
  mounted: function() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios
        .get("https://ecare-project.herokuapp.com/userinfo")
        .then((response) => {
          this.users = response.data.userData;
          console.log(response.data.userData);
          this.users.find((file) => {
            if (file._id === this.id) {
              this.userData = file;
              console.log(this.userData);
            }
          });
        });
    },
    async handleSubmit() {
      var self = this;

      this.userData.staffid = this.staffid;
      this.userData.password = this.password;
      console.log(this.userData);

      await axios
        .post("https://ecare-project.herokuapp.com/newstaff", this.userData)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          console.log("inside");
          self.$router.push({
            path: "/patientinfo",
            query: { alert: "Username and Password Sent!" },
          });
        });
    },
  },

  components: {
    Alert,
  },
};
</script>
<style>
.form-signin {
  max-width: 500px !important;
  padding: 15px;
  margin: 0 auto;
  box-sizing: border-box !important;
  border-color: #fff !important;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px 150px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.button1 {
  padding: 0px 50px;
  width: 30%;
  border-radius: 8px;
  background-color: #227cf1;

  border: none;
  color: white;
  padding: 10px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.button2 {
  background-color: #008cba;
  color: white;
}

.button2:hover {
  background-color: #008cba;
  color: white;
  background-color: white;
  color: black;
  border: 2px solid #008cba;
}
.border {
  background-color: #fff;
}
</style>
