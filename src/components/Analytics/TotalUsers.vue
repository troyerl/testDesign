<template>
  <stats-card>
    <div slot="header" class="icon-danger">
      <i class="nc-icon nc-single-02 text-danger"></i>
    </div>
    <div slot="content">
      <p class="card-category">Total Users</p>
      <h4 class="card-title">23</h4>
    </div>
  </stats-card>
</template>

<script>
import StatsCard from '../Cards/StatsCard';

export default {
  name: 'TotalUsers',
  components: {
    StatsCard
  },
  data() {
    return {

    }
  }
}
</script>

<style>

</style>