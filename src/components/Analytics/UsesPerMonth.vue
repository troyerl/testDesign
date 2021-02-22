<template>
  <chart-card :chart-data="lineChart.data"
              :chart-options="lineChart.options"
              :responsive-options="lineChart.responsiveOptions">
    <template slot="header">
      <div class="d-flex justify-content-between">
        <div>
          <h4 class="card-title">Total Uses</h4>
          <p class="card-category">Per Month</p>
        </div>
        <!-- <div class="d-flex align-items-center">
          <i class="nc-icon nc-stre-left text-dark"></i>
          <h4 class="card-title mx-3">{{year}}</h4>
          <i class="nc-icon nc-stre-right text-dark"></i>
        </div> -->
        <div class="dropdown">
          <a @click="onToggle" class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            {{year}}
          </a>
          <div id="myDropdown" :class="`${showYears ? 'show' : ''} dropdown-content`">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
    </template>
    <!-- <template slot="footer">
      <div class="legend">
        <i class="fa fa-circle text-danger"></i> Click
      </div>
    </template> -->
  </chart-card>
</template>

<script>
import ChartCard from '../Cards/ChartCard';

export default {
  name: 'UsesPerMonth',
  components: {
    ChartCard
  },
  data() {
    return {
      year: new Date().getFullYear(),
      lineChart: {
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          series: [
            [],
            [287, 403],
          ]
        },
        options: {
          low: 0,
          high: 800,
          showArea: false,
          height: '245px',
          axisX: {
            showGrid: false
          },
          lineSmooth: true,
          showLine: true,
          showPoint: true,
          fullWidth: true,
          chartPadding: {
            right: 50
          }
        },
        responsiveOptions: [
          ['screen and (max-width: 640px)', {
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