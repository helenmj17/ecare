<template>
  <body class="bg-light">
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark"
      style="background-color: #e3f2fd;"
    >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" v-bind:to="'/doctors'"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" v-bind:to="'/patientinfo/' + id"
              >Patients</router-link
            >
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" v-bind:to="'/patientstaff/' + id"
              >Staff Details</router-link
            >
          </li>

          <li class="nav-item">
            <router-link class="nav-link" v-bind:to="'/health/' + id"
              >Health Details</router-link
            >
          </li>
        </ul>
      </div>
      <router-link class="" v-bind:to="'/'"
        ><button class="btn btn-outline-danger btn-sm btn-block" type="submit">
          Delete
        </button></router-link
      >

      <router-link class="" v-bind:to="'/'"
        ><button class="btn btn-outline-primary btn-sm btn-block" type="submit">
          Edit
        </button></router-link
      >
    </nav>
    <div class="container">
      <div class="py-5 text-center">
        <img
          class="a-block mb-2"
          src="../assets/images/logo.png"
          alt=""
          width="72"
          height="72"
        />
        <h3>Family Details</h3>
        <p class="lead">
          To be edited and delted only by the authorized admin/personnel.
          Changes should be edited only if necessary and to be careful about it.
        </p>
      </div>

      <div class="row">
        <h4>Primary Details</h4>
        <br /><br /><br />

        <div class="col-md-4 order-md-2 mb-4">
          <label for="name">Financial Status</label>
          <div class="input-group">
            <input
              type="text"
              v-model="userData.financial_status"
              class="form-control"
              id="housename"
              placeholder=""
              required
            />
          </div>
          <br />
          <div class="row">
            <div class="col-md-3 mb-3">
              <label for="age">Patients View</label>
              <input
                type="text"
                v-model="userData.patients_view"
                class="form-control"
                id="age"
                placeholder=""
                required
              />
              <div class="invalid-feedback">
                age required.
              </div>
            </div>
            <div class="col-md-5 mb-3">
              <label for="country">Family View </label>
              <input
                type="text"
                v-model="userData.family_view"
                class="form-control"
                id="blood"
                placeholder=""
                required
              />
              <div class="invalid-feedback">
                Please select a valid panchayat.
              </div>
            </div>
          </div>

          <div class="col-md-3 mb-3">
            <label for="age">Physical Treatment</label>
            <input
              type="text"
              v-model="userData.physical_treatment"
              class="form-control"
              id="age"
              placeholder=""
              required
            />
            <div class="invalid-feedback">
              age required.
            </div>
          </div>
        </div>
        <div class="col-md-8 order-md-1">
          <form class="needs-validation" novalidate>
            <div class="mb-3">
              <label for="name">Social Life</label><br />
              <div class="input-group">
                <input
                  type="text"
                  v-model="userData.social_life"
                  class="form-control"
                  id="housename"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-5 mb-3">
                <label for="country">Mental Treatment </label>
                <input
                  type="text"
                  v-model="userData.mental_treatment"
                  class="form-control"
                  id="blood"
                  placeholder=""
                  required
                />
                <div class="invalid-feedback">
                  Please select a valid panchayat.
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <label for="state">Financial Help</label>
                <input
                  type="text"
                  v-model="userData.financial_help"
                  class="form-control"
                  id="blood"
                  placeholder=""
                  required
                />
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="zip">Pulse Rate</label>
                <input
                  type="text"
                  v-model="userData.pulse_rate"
                  class="form-control"
                  id="zip"
                  placeholder=""
                  required
                />
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="housename">Bp Rate</label>
              <div class="input-group">
                <input
                  type="text"
                  v-model="userData.bp_rate"
                  class="form-control"
                  id="housename"
                  placeholder="housename"
                  required
                />
                <div class="invalid-feedback" style="width: 100%;">
                  Your housename is required.
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="address">Self Cleanliness</label>
              <input
                type="text"
                v-model="userData.self_cleanliness"
                class="form-control"
                id="address"
                placeholder="Address"
                required
              />
              <div class="invalid-feedback">
                Please enter your address.
              </div>
            </div>

            <hr class="mb-4" />
          </form>
          <br /><br /><br /><br />
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import axios from "axios";
export default {
  name: "Patients",
  data() {
    return {
      userData: {},
      patients: [],

      id: this.$route.params.id,
    };
  },
  methods: {
    fetchPatients() {
      // console.log("fetch")
      axios
        .get("https://ecare-project.herokuapp.com/patientcase2info")
        .then((response) => {
          console.log(response);
          this.patients = response.data.patientData;
          this.patients.find((file) => {
            if (file.register_no === Number(this.id)) {
              this.userData = file;
              console.log(file);
            }
          });
        });
    },
  },
  created: function() {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    this.fetchPatients();
  },
  updated: function() {
    this.fetchPatients();
  },
};
</script>

<style></style>
