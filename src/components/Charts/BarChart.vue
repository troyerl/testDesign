<script>
import { Bar } from 'vue-chartjs'
 
export default {
  extends: Bar,
  props: ['labels', 'data'],
  watch: {
    'data' (to, from) {
      this.render();
    }
  },
  mounted () {
    this.render();
  },
  methods: {
    render() {
      this.renderChart({
        labels: this.labels,
        datasets: [
          {
            backgroundColor: '#FB404B',
            data: this.data
          }
        ]
      }, {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            display: true,
            ticks: {
              beginAtZero: true,
    
            }
          }]
        },
      })
    }
  }
}

</script>
