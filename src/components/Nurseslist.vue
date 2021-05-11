<template>
  <div>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <!-- Brand/logo -->

      <img
        class="mb-4"
        src="../assets/images/logo.png"
        alt=""
        width="40"
        height="23"
      />
      <!-- Links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#">Link 1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link 3</a>
        </li>
      </ul>
    </nav>
    <div class="sidebar">
      <router-link class="" v-bind:to="'/patientinfo'"
        ><i class="fa fa-fw fa-user"></i> Patient</router-link
      >
      <router-link class="" v-bind:to="'/doctors'"
        ><i class="fa fa-fw fa-user"></i> Doctors</router-link
      >
      <router-link class="" v-bind:to="'/nurses'"
        ><i class="fa fa-fw fa-user"></i> Nurses</router-link
      >
      <router-link class="" v-bind:to="'/ashaworker'"
        ><i class="fa fa-fw fa-user"></i> Ashaworker</router-link
      >
      <router-link class="" v-bind:to="'/'"
        ><i class="fa fa-fw fa-wrench"></i> Analysis</router-link
      >
      <router-link class="" v-bind:to="'/'"
        ><i class="fa fa-fw fa-envelope"></i> Contact</router-link
      >
    </div>

    <div class="main">
      <br />
      <div class="row">
        | Filter by panchayat
        <div class="col-md-2">
          <div class="dropdown show">
            <select
              v-model="panchayat"
              class="btn btn-light dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <option v-for="user in users" :key="user.id">
                {{ user.panchayat }}
              </option>
            </select>
          </div>
        </div>
        <div class="col-md-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search name"
            v-model="filterInput"
          />
        </div>
      </div>

      <br />

      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Panchayat</th>
            <th>Phone No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(user, index) in filterBy(users, filterInput)"
            :key="user.id"
          >
            <th>{{ index + 1 }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.designation }}</td>
            <td>{{ user.panchayat }}</td>
            <td>{{ user.phone }}</td>

            <td>
              <router-link class="btn btn-primary" v-bind:to="'/'"
                >View</router-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Users",
  data() {
    return {
      users: [],
      filterInput: "",
    };
  },
  methods: {
    fetchUsers() {
      axios
        .get("https://ecare-project.herokuapp.com/userinfo")
        .then((response) => {
          this.users = response.data.userData;
          //console.log(response.data.userData);
          let digitalGoods = this.users.filter(function(user) {
            return user.designation == "nurse";
          });
          this.users = digitalGoods;
          console.log(digitalGoods);
        });
    },
    filterBy(list, value) {
      value = value.charAt(0).toUpperCase() + value.slice(1);

      return list.filter(function(user) {
        return user.name.indexOf(value) > -1;
      });
    },
  },
  created: function() {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    this.fetchUsers();
  },
  updated: function() {
    // this.fetchUsers();
  },
};
</script>

<style>
.sidebar {
  height: 100%;
  width: 160px;
  position: absolute;
  z-index: 1;
  top: 55px;
  left: 0;
  background-color: rgb(49, 49, 49);
  overflow-x: hidden;
  padding-top: 16px;
}

.sidebar a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #929292;
  display: block;
}

.sidebar a:hover {
  color: #ffffff;
}

.main {
  margin-left: 160px; /* Same as the width of the sidenav */
  padding: 0px 10px;
}

@media screen and (max-height: 450px) {
  .sidebar {
    padding-top: 15px;
  }
  .sidebar a {
    font-size: 18px;
  }
}
</style>
