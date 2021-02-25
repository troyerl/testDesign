<template>
  <chart-card
    :chart-data="barChart.data"
    :chart-options="barChart.options"
    :chart-responsive-options="barChart.responsiveOptions"
    chart-type="Bar">
    <template slot="header">
      <h4 class="card-title">Usage Per User</h4>
      <p class="card-category">Each Month</p>
    </template>
    <template slot="footer">
      <div class="legend">
        <i class="fa fa-circle text-info"></i> Destrict Users
      </div>
    </template>
  </chart-card>
</template>

<script>
import ChartCard from 'src/components/Cards/ChartCard.vue'

import { mapState } from 'vuex';

export default {
  name: 'TotalUsagePerUserTest',
  components: {
    ChartCard
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
      test: [],
      barChart: {
        data: {
          labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
          series: [this.totalUsagePerUser]
        },
        options: {
          seriesBarDistance: 10,
          axisX: {
            showGrid: false
          },
          height: '245px'
        },
        responsiveOptions: [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 5,
            axisX: {
              labelInterpolationFnc (value) {
                return value[0]
              }
            }
          }]
        ]
      },
    }
  }
}
</script>

<style>

</style>