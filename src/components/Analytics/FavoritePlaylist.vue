<template>
  <stats-card>
    <div slot="header" class="icon-success">
      <i class="nc-icon nc-favourite-28 text-success"></i>
    </div>
    <div slot="content">
      <p class="card-category">Most Popular Playlist</p>
      <h4 class="card-title">Peppa The Pig</h4>
    </div>
  </stats-card>
</template>

<script>
import StatsCard from '../Cards/StatsCard';

export default {
  name: 'AmountSaved',
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