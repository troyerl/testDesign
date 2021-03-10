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
          <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-box-arrow-right me-3" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
            <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
          </svg>
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
      this.$store.dispatch('hospitalInfo/getMediVues');
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
