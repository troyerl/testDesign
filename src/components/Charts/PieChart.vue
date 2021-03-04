<script>
import { Pie } from 'vue-chartjs'
 
export default {
  extends: Pie,
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
            backgroundColor: ["#FFCA3E", "#FF6F50", "#D03454", "#9C2162", "#772F67"],
            fill: false,
            borderWidth: 3,
            data: this.data
          }
        ]
      }, {
        responsive: true,
        maintainAspectRatio: false
      })
    }
  }
}

</script>
