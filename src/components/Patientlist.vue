<template>
  <div class="container mt-4">
    <Alert v-if="alert" v-bind:message="alert" />
    <h3 class="page-header">Patient List</h3>
    <br />
    <input
      class="form-control"
      placeholder="Search Name"
      v-model="filterInput"
    />
    <br />
    <table class="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>Register No</th>
          <th>Panchayat</th>
          <th>Phone No</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(patient, index) in filterBy(patients, filterInput)"
          :key="patient.id"
        >
          <th>{{ index + 1 }}</th>
          <td>{{ patient.patient_name }}</td>
          <td>{{ patient.register_no }}</td>
          <td>{{ patient.panchayat }}</td>
          <td>{{ patient.phone }}</td>

          <td>
            <button
              class="btn btn-primary"
              @click="$router.push('/patientinfo/' + patient.register_no)"
            >
              View
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import Alert from "./Alert";
import axios from "axios";

export default {
  name: "Patients",
  data() {
    return {
      patients: [],
      alert: "",
      filterInput: "",
    };
  },
  methods: {
    fetchPatients() {
      axios
        .get("https://ecare-project.herokuapp.com/patientinfo")
        .then((response) => {
          this.patients = response.data.patientData;
          console.log(response.data.patientData);
        });
    },
    filterBy(list, value) {
      value = value.charAt(0).toUpperCase() + value.slice(1);
      return list.filter(function(patient) {
        return patient.patient_name.indexOf(value) > -1;
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
    // this.fetchPatients();
  },
  components: {
    Alert,
  },
};
</script>
