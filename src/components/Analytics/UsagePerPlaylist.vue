<template>
  <!-- <chart-card :chart-data="pieChart.data" chart-type="Pie">
    <template slot="header">
      <h4 class="card-title">Playlist Statistics</h4>
      <p class="card-category">Last Campaign Performance</p>
    </template>
    <template slot="footer">
      <div class="legend text-center">
        <i class="fa fa-circle text-info"></i> Peppa Pig
        <i class="fa fa-circle text-danger"></i> Superhero Videos
        <i class="fa fa-circle text-warning"></i> Live News
        <i class="fa fa-circle text-warning"></i> Twitch
        <i class="fa fa-circle text-warning"></i> Princess
      </div>
    </template>
  </chart-card> -->
  <Card>
    <template slot="header">
      <h4 class="card-title">Playlist Statistics</h4>
    </template>
    <PieChart :data="series" :labels="labels"/>
  </Card>
</template>

<script>
import Card from '../Cards/Card';

import PieChart from '../Charts/PieChart';

export default {
  name: 'UsagePerPlaylist',
  components: {
    Card,
    PieChart
  },
  data() {
    return {
      labels: ['40%', '20%', '20%', '20%'],
      series: [40, 20, 20, 20]
    }
  }
}
</script>

<style>

</style>