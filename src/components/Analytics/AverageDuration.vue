<template>
  <stats-card>
    <div slot="header" class="icon-warning">
      <i class="nc-icon nc-chart text-warning"></i>
    </div>
    <div slot="content">
      <p class="card-category">Average Duration</p>
      <h4 class="card-title">{{ report.averageDuration }}</h4>
    </div>
  </stats-card>
</template>

<script>
import StatsCard from '../Cards/StatsCard';

import { mapState } from 'vuex';

export default {
  name: 'AverageDuration',
  components: {
    StatsCard
  },
  computed: {
    ...mapState('analytics', [
      'report'
    ])
  }
}
</script>

<style>

</style>