<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-md-6">
          <AverageDuration/>
        </div>
        <div class="col-xl-3 col-md-6">
          <FavoritePlaylist/>
        </div>
        <div class="col-xl-3 col-md-6">
          <TotalUsers/>
        </div>
        <div class="col-xl-3 col-md-6">
          <TotalUsage/>
        </div>

      </div>
      <div class="row">
        <div class="col-md-8">
          <UsesPerMonth/>
        </div>

        <div class="col-md-4">
          <UsagePerPlaylist/>
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
  import BaseDropdown from 'src/components/BaseDropdown';

  import UsesPerMonth from 'src/components/Analytics/UsesPerMonth';
  import AverageDuration from 'src/components/Analytics/AverageDuration';
  import FavoritePlaylist from 'src/components/Analytics/FavoritePlaylist';
  import TotalUsers from 'src/components/Analytics/TotalUsers';
  import UsersPerMonth from 'src/components/Analytics/UsersPerMonth';
  import UsagePerPlaylist from 'src/components/Analytics/UsagePerPlaylist';
  import TotalUsage from 'src/components/Analytics/TotalUsage';

  export default {
    components: {
      ChartCard,
      StatsCard,
      UsesPerMonth,
      AverageDuration,
      FavoritePlaylist,
      TotalUsers,
      UsersPerMonth,
      UsagePerPlaylist,
      BaseDropdown,
      TotalUsage
    },
    data () {
      return {
        editTooltip: 'Edit Task',
        deleteTooltip: 'Remove',
        
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
      }
    }
  }
</script>
<style>

</style>
