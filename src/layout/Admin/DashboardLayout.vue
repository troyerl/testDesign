<template>
  <div class="wrapper">
    <side-bar>
      <sidebar-link :to="{name: routes.dashboard.name }">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link :to="{name: `${routes.userProfile.name}` }">
        <i class="nc-icon nc-circle-09"></i>
        <p>Account Settings</p>
      </sidebar-link>
      <sidebar-link :to="{name: `${routes.playlists.name}` }">
        <i class="nc-icon nc-notes"></i>
        <p>Playlists</p>
      </sidebar-link>
      <sidebar-link :to="{name: `${routes.playlist.name}`, params: { id: 'new' }}">
        <i class="nc-icon nc-simple-add"></i>
        <p>New Playlist</p>
      </sidebar-link>
      <sidebar-link :to="{name: `${routes.map.name}` }">
        <i class="nc-icon nc-pin-3"></i>
        <p>Maps</p>
      </sidebar-link>

      <template slot="bottom-links">
        <sidebar-link class="active"
                      to="/admin/upgrade">
          <i class="nc-icon nc-alien-33"></i>
          <p>Log out</p>
        </sidebar-link>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">

</style>
<script>
  import TopNavbar from './TopNavbar.vue'
  import ContentFooter from './ContentFooter.vue'
  import DashboardContent from './Content.vue'

  import route from '../../routes/routes';

  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
    },
    data() {
      return {
        routes: route.admin
      }
    },
    mounted() {
      this.$store.dispatch('analytics/getReport');
      this.$store.dispatch('hospitalInfo/getPlaylistList');
    },
    methods: {
      toggleSidebar () {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false)
        }
      },
      onClick(name) {
        this.$route.push({ name });
      }
    }
  }

</script>
