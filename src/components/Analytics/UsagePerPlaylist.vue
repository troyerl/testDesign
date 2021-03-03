<template>
  <Card>
    <template slot="header">
      <h4 class="card-title">Playlist Statistics</h4>
    </template>
    <PieChart :data="totalPlaylistUsage.data" :labels="totalPlaylistUsage.labels"/>
  </Card>
</template>

<script>
import Card from '../Cards/Card';

import PieChart from '../Charts/PieChart';

import { mapState } from 'vuex';

export default {
  name: 'UsagePerPlaylist',
  components: {
    Card,
    PieChart
  },
  computed: {
    ...mapState('analytics', [
      'totalPlaylistUsage'
    ])
  }
}
</script>

<style>

</style>