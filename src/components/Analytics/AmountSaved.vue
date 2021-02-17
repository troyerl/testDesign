<template>
  <stats-card>
    <div slot="header" class="icon-success">
      <i class="nc-icon nc-light-3 text-success"></i>
    </div>
    <div slot="content">
      <p class="card-category">Amount Saved</p>
      <h4 class="card-title">$1,345</h4>
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