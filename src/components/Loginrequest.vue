<template>
  <div class="container mt-4">
    <h3 class="page-header">User Requests</h3>
    <br />

    <br />
    <table class="table table-hover active">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Designation</th>
          <th>Panchayat</th>
          <th>Phone</th>
          <th class="text-center">Actions</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users" :key="user.id">
          <th>{{ index + 1 }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.designation }}</td>
          <td>{{ user.panchayat }}</td>
          <td>{{ user.phone }}</td>
          <td>
            <router-link
              class="btn btn-primary"
              v-bind:to="'/details/' + user._id"
              >Accept</router-link
            >
          </td>
          <td>
            <button
              @click="deleteRequest(index)"
              class="btn btn-danger"
              v-bind:to="'/decline'"
            >
              Decline
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Users",
  data() {
    return {
      users: [],
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
        });
    },
    deleteRequest(id) {
      axios
        .delete("https://ecare-project.herokuapp.com/deleteuser/" + id)
        .then(() => {
          this.fetchUsers();
        });
    },
  },

  created: function() {
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert;
    }
    // this.fetchUsers();
  },
  updated: function() {
    //this.fetchUsers();
  },
  components: {},
};
</script>
