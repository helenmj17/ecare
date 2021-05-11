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
          <li class="nav-item active">
            <router-link class="nav-link" v-bind:to="'/patientstaff/' + id"
              >Staff Details</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" v-bind:to="'/family/' + id"
              >Family Details</router-link
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
        <h3>Patient Details</h3>
        <p class="lead">
          To be edited and delted only by the authorized admin/personnel.
          Changes should be edited only if necessary and to be careful about it.
        </p>
      </div>

      <div class="row">
        <h4>Primary Details</h4>
        <br /><br /><br />

        <div class="col-md-4 order-md-2 mb-4">
          <label for="name">Panchayat</label>
          <div class="input-group">
            <input
              type="text"
              v-model="userData.panchayat"
              class="form-control"
              id="housename"
              placeholder=""
              required
            />
          </div>
          <br />
          <div class="row">
            <div class="col-md-3 mb-3">
              <label for="age">Age</label>
              <input
                type="text"
                v-model="userData.age"
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
              <label for="country">Phone Number </label>
              <input
                type="text"
                v-model="userData.phone"
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
            <label for="age">Gender</label>
            <input
              type="text"
              v-model="userData.gender"
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
              <label for="name">Full Name</label><br />
              <div class="input-group">
                <input
                  type="text"
                  v-model="userData.patient_name"
                  class="form-control"
                  id="housename"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-5 mb-3">
                <label for="country">Primary Health Centre </label>
                <input
                  type="text"
                  v-model="userData.pri_health_centre"
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
                <label for="state">Register Number</label>
                <input
                  type="text"
                  v-model="userData.register_no"
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
                <label for="zip">Op number</label>
                <input
                  type="text"
                  v-model="userData.op_no"
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
              <label for="housename">Landmark</label>
              <div class="input-group">
                <input
                  type="text"
                  v-model="userData.landmark"
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
              <label for="address">Address</label>
              <input
                type="text"
                v-model="userData.address"
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

            <div class="row">
              <div class="col-md-6 mb-3">
                <button class="btn btn-danger btn-lg btn-block" type="submit">
                  Delete
                </button>
              </div>
              <div class="col-md-6 mb-3">
                <button class="btn btn-primary btn-lg btn-block" type="submit">
                  Edit
                </button>
              </div>
            </div>
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
        .get("https://ecare-project.herokuapp.com/patientinfo")
        .then((response) => {
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
    //this.fetchPatients();
  },
};
</script>

<style></style>
