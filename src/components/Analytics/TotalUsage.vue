<template>
  <stats-card>
    <div slot="header" class="icon-info">
      <i class="nc-icon nc-chart-pie-36 text-primary"></i>
    </div>
    <div slot="content">
      <p class="card-category">Total Usage</p>
      <h4 class="card-title">{{totalUsage}}</h4>
    </div>
  </stats-card>
</template>

<script>
import StatsCard from '../Cards/StatsCard';

import { mapState } from 'vuex';

export default {
  name: 'TotalUsage',
  components: {
    StatsCard
  },
  computed: {
    ...mapState('analytics', [
      'totalUsage'
    ])
  }
}
</script>

<style>

</style>