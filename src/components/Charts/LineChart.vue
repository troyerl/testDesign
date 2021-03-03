<script>
import { Line } from 'vue-chartjs';
 
export default {
  extends: Line,
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
            borderColor: '#FB404B',
            fill: false,
            borderWidth: 3,
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
}

</script>
