<template>
  <stats-card>
    <div slot="header" class="icon-info">
      <i class="nc-icon nc-chart-pie-36 text-primary"></i>
    </div>
    <div slot="content">
      <p class="card-category">Total Usage</p>
      <h4 class="card-title">45</h4>
    </div>
  </stats-card>
</template>

<script>
import StatsCard from '../Cards/StatsCard';

export default {
  name: 'TotalUsage',
  components: {
    StatsCard
  }
}
</script>

<style>

</style>