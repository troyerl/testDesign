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
        <div class="col-md-12">
          <UsersPerMonth/>
        </div>

        <!-- <div class="col-md-6">
          <TotalUsagePerUser/>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
  import UsesPerMonth from 'src/components/Analytics/UsesPerMonth';
  import AverageDuration from 'src/components/Analytics/AverageDuration';
  import FavoritePlaylist from 'src/components/Analytics/FavoritePlaylist';
  import TotalUsers from 'src/components/Analytics/TotalUsers';
  import UsersPerMonth from 'src/components/Analytics/UsersPerMonth';
  import UsagePerPlaylist from 'src/components/Analytics/UsagePerPlaylist';
  import TotalUsage from 'src/components/Analytics/TotalUsage';
  import TotalUsagePerUser from 'src/components/Analytics/TotalUsagePerUser';

  export default {
    components: {
      UsesPerMonth,
      AverageDuration,
      FavoritePlaylist,
      TotalUsers,
      UsersPerMonth,
      UsagePerPlaylist,
      TotalUsage,
      TotalUsagePerUser
    }
  }
</script>
<style>

</style>
