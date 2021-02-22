<template>
  <chart-card :chart-data="pieChart.data" chart-type="Pie">
    <template slot="header">
      <h4 class="card-title">Playlist Statistics</h4>
      <!-- <p class="card-category">Last Campaign Performance</p> -->
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
  </chart-card>
</template>

<script>
import ChartCard from 'src/components/Cards/ChartCard.vue'

export default {
  name: 'UsagePerPlaylist',
  components: {
    ChartCard
  },
  data() {
    return {
      pieChart: {
        data: {
          labels: ['40%', '20%', '20%', '20%'],
          series: [40, 20, 20, 20]
        }
      },
    }
  }
}
</script>

<style>

</style>