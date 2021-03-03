<script>
import { Line } from 'vue-chartjs';
import { mapState } from 'vuex';
 
export default {
  extends: Line,
  data() {
    return {
      chart: null
    }
  },
  computed: {
    ...mapState('analytics', [
      'totalUsagePerMonth',
    ])
  },
  mounted () {
    this.chart = this.renderChart({
      labels: this.labels,
      datasets: [
        {
          backgroundColor: '#FB404B',
          borderColor: '#FB404B',
          fill: false,
          borderWidth: 3,
          data: this.totalUsagePerMonth
        }
      ]
    }, {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        display: false
      },
    })
  },
}

</script>
