<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="col-sm-12 strpied-tabled-with-hover table-condensed"
                body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <div class="d-flex w-100 justify-content-between">
                <h4 class="card-title me-3">Playlists</h4>
                <BaseInput v-model="searchValue"
                           placeholder="Search"
                           class="searchBar"
                           addonRightIcon="nc-icon nc-zoom-split"
                           type="search"
                />
              </div>
            </template>
            <table class="table table-hover mx-4">
              <thead>
                <tr>
                  <th :key="header" v-for="header in headers" scope="col">{{header}}</th>
                </tr>
              </thead>
              <tbody>
                <tr :key="playlist.id" v-for="(playlist, idx) in hospitalInfo.playlists">
                  <th scope="row">{{idx + 1}}</th>
                  <td>{{playlist.name}}</td>
                  <td>{{playlist.timesPlayed}}</td>
                  <td>{{getUpdatedDate(playlist.updatedAt)}}</td>
                  <td>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-pencil me-3" viewBox="0 0 16 16" @click="onEdit(playlist.id)">
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-trash" viewBox="0 0 16 16">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </card>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import LTable from 'src/components/Table.vue'
  import Card from 'src/components/Cards/Card.vue'
  import BaseInput from 'src/components/Inputs/BaseInput';

  import { mapState } from 'vuex';
  import routes from 'src/routes/routes';

  export default {
    components: {
      LTable,
      Card,
      BaseInput
    },
    computed: {
      ...mapState('auth', [
        'hospitalInfo'
      ])
    },
    data () {
      return {
        searchValue: '',
        headers: [
          '#',
          'Name',
          'Total Plays',
          'Last Updated',
          'Actions'
        ],
      }
    },
    methods: {
      onEdit(id) {
        this.$router.push({ name: routes.admin.playlist.name, params: { id }});
      },
      getUpdatedDate(date) {
        let updatedDate = new Date(date);
        return `${updatedDate.getMonth()+1}/${updatedDate.getDate()}/${updatedDate.getFullYear()}`;
      }
    }
  }
</script>
<style scoped>
.searchBar {
  width: 90%;
}

@media only screen and (min-width: 768px) {
  .searchBar {
    width: 40%;
  }
}
</style>
