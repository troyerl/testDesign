<template>
  <Card>
    <div class="d-flex justify-content-between">
      <div>
        <h4 class="card-title">Total Users</h4>
        <p class="card-category">Per Month</p>

      </div>
      <select class="form-select form-select-sm w-25" aria-label=".form-select-sm example" @change="onYearChange">
        <option :key="year" v-for="year in years" :value="year" :selected="selectedYear === year">{{year}}</option>
      </select>
    </div>
    <LineChart :data="totalUsersPerMonth" :labels="months"/>
  </Card>
</template>

<script>
import Card from '../Cards/Card';
import LineChart from '../Charts/LineChart';

import { mapState } from 'vuex';

export default {
  name: 'UsersPerMonth',
  components: {
    Card,
    LineChart
  },
  computed: {
    ...mapState('analytics', [
      'months',
      'totalUsersPerMonth',
      'years'
    ])
  },
  data() {
    return {
      selectedYear: new Date().getFullYear(),
    }
  },
  methods: {
    onYearChange(e) {
      this.$store.dispatch('analytics/getTotalUsersPerMonth', parseInt(e.target.value));
    }
  }
}
</script>

<style>
/* Dropdown Button */
.dropbtn {
  background-color: transparent;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-color: #888888;
  color: #888888;
}

/* Dropdown button on hover & focus */
.dropbtn:hover, .dropbtn:focus {
  background-color: #2980B9;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {display:block;}
</style>