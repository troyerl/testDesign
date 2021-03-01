<script>
// MonthlyIncome.vue
import { Line } from 'vue-chartjs'
import { mapState } from 'vuex';
 
export default {
  extends: Line,
  computed: {
    ...mapState('analytics', [
      'totalUsagePerUser'
    ])
  },
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
          data: this.totalUsagePerUser
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
