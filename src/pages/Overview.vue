<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <AverageDuration/>
        </div>
        <div class="col-xl-3 col-md-6">
          <AmountSaved/>
        </div>
        <div class="col-xl-3 col-md-6">
          <TotalUsers/>
        </div>
        <div class="col-xl-3 col-md-6">
          <stats-card>
            <div slot="header" class="icon-info">
              <i class="nc-icon nc-favourite-28 text-primary"></i>
            </div>
            <div slot="content">
              <p class="card-category">Followers</p>
              <h4 class="card-title">+45</h4>
            </div>
          </stats-card>
        </div>

      </div>
      <div class="row">
        <div class="col-md-8">
          <UsesPerMonth/>
        </div>

        <div class="col-md-4">
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
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <UsersPerMonth/>
        </div>

        <div class="col-md-6">
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import ChartCard from 'src/components/Cards/ChartCard.vue'
  import StatsCard from 'src/components/Cards/StatsCard.vue'
  import LTable from 'src/components/Table.vue'

  import UsesPerMonth from '../components/Analytics/UsesPerMonth';
  import AverageDuration from '../components/Analytics/AverageDuration';
  import AmountSaved from '../components/Analytics/AmountSaved';
  import TotalUsers from '../components/Analytics/TotalUsers';
  import UsersPerMonth from '../components/Analytics/UsersPerMonth';

  export default {
    components: {
      LTable,
      ChartCard,
      StatsCard,
      UsesPerMonth,
      AverageDuration,
      AmountSaved,
      TotalUsers,
      UsersPerMonth
    },
    data () {
      return {
        editTooltip: 'Edit Task',
        deleteTooltip: 'Remove',
        year: 2021,
        pieChart: {
          data: {
            labels: ['40%', '20%', '20%', '20%'],
            series: [40, 20, 20, 20]
          }
        },
        barChart: {
          data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            series: [
              [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895],
            ]
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
        tableData: {
          data: [
            {title: 'Sign contract for "What are conference organizers afraid of?"', checked: false},
            {title: 'Lines From Great Russian Literature? Or E-mails From My Boss?', checked: true},
            {
              title: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
              checked: true
            },
            {title: 'Create 4 Invisible User Experiences you Never Knew About', checked: false},
            {title: 'Read "Following makes Medium better"', checked: false},
            {title: 'Unfollow 5 enemies from twitter', checked: false}
          ]
        }
      }
    }
  }
</script>
<style>

</style>
