<template>
  <Card>
    <template slot="header">
      <h4 class="card-title">Usage Per User</h4>
      <p class="card-category">Each Month</p>
    </template>
    <LineChart :data="totalUsagePerUser" :labels="this.labels"/>
  </Card>
</template>

<script>
import ChartCard from 'src/components/Cards/ChartCard.vue';
import Card from 'src/components/Cards/Card.vue';
import Test from './Test';
import LineChart from '../Charts/LineChart';

import { mapState } from 'vuex';

export default {
  name: 'TotalUsagePerUserTest',
  components: {
    ChartCard,
    Test,
    Card,
    LineChart
  },
  computed: {
    ...mapState('analytics', [
      'totalUsagePerUser'
    ])
  },
  mounted() {
    this.test = this.totalUsagePerUser;
  },
  data() {
    return {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    }
  }
}
</script>

<style>

</style>