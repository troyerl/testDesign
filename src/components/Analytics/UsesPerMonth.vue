<template>
  <Card>
    <div class="d-flex justify-content-between">
      <div>
        <h4 class="card-title">Total Uses</h4>
        <p class="card-category">Per Month</p>
      </div>
      <select class="form-select form-select-sm w-25" aria-label=".form-select-sm example" @change="onYearChange">
        <option :key="year" v-for="year in years" :value="year" :selected="selectedYear === year">{{year}}</option>
      </select>
    </div>
    <LineChart :data="totalUsagePerMonth" :labels="months"/>
  </Card>
</template>

<script>
import Card from '../Cards/Card';
import LineChart from '../Charts/LineChart';

import { mapState } from 'vuex';

export default {
  name: 'UsesPerMonth',
  components: {
    Card,
    LineChart
  },
  computed: {
    ...mapState('analytics', [
      'totalUsagePerMonth',
      'months',
      'years'
    ])
  },
  methods: {
    onYearChange(e) {
      this.$store.dispatch('analytics/getTotalUsagePerMonth', parseInt(e.target.value));
    }
  },
  data() {
    return {
      selectedYear: new Date().getFullYear()
    }
  }
}
</script>

<style>

</style>