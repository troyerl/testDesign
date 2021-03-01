<script>
// MonthlyIncome.vue
import { Line } from 'vue-chartjs'
import { mapState } from 'vuex';
 
export default {
  extends: Line,
  props: ['labels', 'data'],
  computed: {
    ...mapState('analytics', [
      'totalUsagePerUser'
    ])
  },
  mounted () {
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          backgroundColor: '#FB404B',
          borderColor: '#FB404B',
          // fill: false,
          data: this.data
        }
      ]
    }, {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
    })
  }
}

</script>
