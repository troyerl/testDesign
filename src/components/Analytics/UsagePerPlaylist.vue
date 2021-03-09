<template>
  <Card>
    <template slot="header">
      <h4 class="card-title">Total Playlist Usage</h4>
    </template>
    <PieChart :data="report.totalPlaylistUsage.data" :labels="report.totalPlaylistUsage.labels"/>
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
      'report'
    ])
  }
}
</script>

<style>

</style>