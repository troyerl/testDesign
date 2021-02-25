<template>
  <chart-card :chart-data="lineChart.data"
              :chart-options="lineChart.options"
              :responsive-options="lineChart.responsiveOptions">
    <template slot="header">
      <div class="d-flex justify-content-between">
        <div>
          <h4 class="card-title">Total Users</h4>
          <p class="card-category">Per Month</p>

        </div>
        <!-- <div class="d-flex align-items-center">
          <i @click="changeYear(-1)" class="nc-icon nc-stre-left text-dark"></i>
          <h4 class="card-title mx-3">{{year}}</h4>
          <i @click="changeYear(1)" class="nc-icon nc-stre-right text-dark"></i>
        </div> -->
        <div class="dropdown">
          <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            {{year}}
          </a>
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
  name: 'UsersPerMonth',
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
            [6, 8, 15, 4, 10, 20, 17, 2],
          ]
        },
        options: {
          low: 0,
          high: 20,
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
  },
  methods: {
    changeYear(direction) {
      this.year += direction;
    },
  }
}
</script>

<style>
/* Dropdown Button */
.dropbtn {
  background-color: transparent;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-color: #888888;
  color: #888888;
}

/* Dropdown button on hover & focus */
.dropbtn:hover, .dropbtn:focus {
  background-color: #2980B9;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd}

/* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */
.show {display:block;}
</style>