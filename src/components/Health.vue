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
            <router-link class="nav-link" v-bind:to="'/family/' + id"
              >Family Details</router-link
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
        <h3>Health Details</h3>
        <p class="lead">
          To be edited and delted only by the authorized admin/personnel.
          Changes should be edited only if necessary and to be careful about it.
        </p>
      </div>

      <div class="row">
        <h4>Health Details</h4>
        <br /><br /><br />

        <div class="col-md-4 order-md-2 mb-4">
          <label for="name">Mouth Cleanliness</label>
          <div class="input-group">
            <input
              type="text"
              v-model="userData.mouth_cleanliness"
              class="form-control"
              id=""
              placeholder=""
              required
            />
          </div>
          <br />
          <div class="row">
            <div class="col-md-3 mb-3">
              <label for="age">Skin Cleanliness</label>
              <input
                type="text"
                v-model="userData.skin_cleanliness"
                class="form-control"
                id=""
                placeholder=""
                required
              />
            </div>
            <div class="col-md-5 mb-3">
              <label for="">House Keeping </label>
              <input
                type="text"
                v-model="userData.house_keeping"
                class="form-control"
                id=""
                placeholder=""
                required
              />
            </div>
          </div>

          <div class="col-md-3 mb-3">
            <label for="age">Urine Tube</label>
            <input
              type="text"
              v-model="userData.urine_tube"
              class="form-control"
              id=""
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
              <label for="name">Things Done</label><br />
              <div class="input-group">
                <input
                  type="text"
                  v-model="userData.things_done"
                  class="form-control"
                  id=""
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div class="row">
              <div class="col-md-5 mb-3">
                <label for="country">Rails Tube </label>
                <input
                  type="text"
                  v-model="userData.rails_tube"
                  class="form-control"
                  id="blood"
                  placeholder=""
                  required
                />
              </div>
              <div class="col-md-4 mb-3">
                <label for="state">Sloma</label>
                <input
                  type="text"
                  v-model="userData.sloma"
                  class="form-control"
                  id=""
                  placeholder=""
                  required
                />
              </div>
              <div class="col-md-3 mb-3">
                <label for="zip">Lymphedema</label>
                <input
                  type="text"
                  v-model="userData.lymphedema"
                  class="form-control"
                  id=""
                  placeholder=""
                  required
                />
              </div>
            </div>

            <div class="mb-3">
              <label for="housename">Update Treatment</label>
              <div class="input-group">
                <input
                  type="text"
                  v-model="userData.update_treat"
                  class="form-control"
                  id=""
                  placeholder=""
                  required
                />
              </div>
            </div>

            <div class="mb-3">
              <label for="address">Next Plan Treatment</label>
              <input
                type="text"
                v-model="userData.nextplan_treat"
                class="form-control"
                id=""
                placeholder=""
                required
              />
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
        .get("https://ecare-project.herokuapp.com/patientcase3info")
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
