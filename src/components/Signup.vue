<template>
  <div class="border">
    <div class="block2">
      <form class="form-signin formsign" @submit.prevent="">
        <div class="text-center">
          <img
            class="mb-3"
            src="../assets/images/logo.png"
            alt=""
            width="150"
            height=""
          />
          <h2 class="h3 mb-3 font-weight-normal">Sign Up</h2>
        </div>
        <label for="name" class="sr-only">Name</label>
        <input
          v-model="name"
          type="text"
          id="name"
          class="form-control"
          required
          autofocus
        />
        <label for="inputEmail" class="sr-only">Email address</label>
        <input
          v-model="email"
          type="email"
          id="inputEmail"
          class="form-control"
          required
          autofocus
        />
        <label for="designation" class="sr-only">Designation</label>
        <input
          v-model="designation"
          type="text"
          id="designation"
          class="form-control"
          required
        />
        <label for="Panchayat" class="sr-only">Panchayat</label>
        <input
          v-model="panchayat"
          type="text"
          id="panchayat"
          class="form-control"
          required
        />
        <label for="phone" class="sr-only">Phone</label>
        <input
          v-model="phone"
          type="text"
          id="phone"
          class="form-control"
          required
        />
        <br />

        <div class="text-center">
          <button class="button1 button2" @click="handleSubmit">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      name: "",
      email: "",
      designation: "",
      phone: "",
      panchayat: "",
    };
  },
  methods: {
    async handleSubmit() {
      console.log("click");
      var self = this;
      let newUser = {
        email: this.email,
        name: this.name,
        designation: this.designation,
        phone: this.phone,
        panchayat: this.panchayat,
      };

      await axios
        .post("https://ecare-project.herokuapp.com/newuser", newUser)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          console.log("inside");
          self.$router.push({ path: "/" });
        });
    },
  },
  components: {},
};
</script>
<style>
.form-signin {
  max-width: 500px;
  padding: 15px;
  margin: 0 auto;
  box-sizing: border-box !important;
  border-color: #fff !important;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 7px 150px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.button1 {
  padding: 50px 50px;
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
