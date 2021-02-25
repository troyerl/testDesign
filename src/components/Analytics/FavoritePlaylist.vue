<template>
  <stats-card>
    <div slot="header" class="icon-success">
      <i class="nc-icon nc-favourite-28 text-success"></i>
    </div>
    <div slot="content">
      <p class="card-category">Most Popular Playlist</p>
      <h4 class="card-title resize-on-small">Peppa The Pig</h4>
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
@media only screen and (min-width: 1200px) {
  .resize-on-small {
    font-size: 18px;
  }
}
</style>