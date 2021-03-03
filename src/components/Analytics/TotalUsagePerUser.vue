<template>
  <Card>
    <template slot="header">
      <h4 class="card-title">Usage Per User</h4>
      <p class="card-category">Each Month</p>
    </template>
    <BarChart :data="totalUsagePerUser.data" :labels="totalUsagePerUser.labels"/>
  </Card>
</template>

<script>
import Card from '../Cards/Card';
import BarChart from '../Charts/BarChart';

import { mapState } from 'vuex';

export default {
  name: 'TotalUsagePerUserTest',
  components: {
    Card,
    BarChart
  },
  computed: {
    ...mapState('analytics', [
      'totalUsagePerUser'
    ])
  }
}
</script>

<style>

</style>