<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card class="strpied-tabled-with-hover"
                body-classes="table-full-width table-responsive"
          >
            <template slot="header">
              <div class="d-flex w-100 justify-content-between">
                <h4 class="card-title">Playlists</h4>
                <BaseInput v-model="searchValue"
                           placeholder="Search"
                           class="w-25"
                           addonRightIcon="nc-icon nc-zoom-split"
                />
              </div>
            </template>
            <table class="table table-striped table-hover mx-4">
              <thead>
                <tr>
                  <th :key="header" v-for="header in headers" scope="col">{{header}}</th>
                </tr>
              </thead>
              <tbody>
                <tr :key="playlist.id" v-for="(playlist, idx) in playlists">
                  <th scope="row">{{idx + 1}}</th>
                  <td>{{playlist.name}}</td>
                  <td>{{playlist.totalPlays}}</td>
                  <td>{{playlist.lastUpdated}}</td>
                  <td>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="blue" class="bi bi-pencil-square me-3" viewBox="0 0 16 16">
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                      <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
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
  import BaseInput from '../components/Inputs/BaseInput';

  export default {
    components: {
      LTable,
      Card,
      BaseInput
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
        playlists: [
          {
            id: 'fasfasfasfsf',
            name: 'Peppa Pig',
            totalPlays: 12,
            lastUpdated: '12/20/20'
          },
          {
            id: 'fasfasfasfsf1',
            name: 'Superhero Videos',
            totalPlays: 12,
            lastUpdated: '12/20/20'
          },
          {
            id: 'fasfasfasfsf2',
            name: 'Princess',
            totalPlays: 12,
            lastUpdated: '12/20/20'
          },
          {
            id: 'fasfasfasfsf3',
            name: 'Live News',
            totalPlays: 12,
            lastUpdated: '12/20/20'
          },
          {
            id: 'fasfasfasfsf4',
            name: 'Twitch',
            totalPlays: 12,
            lastUpdated: '12/20/20'
          }
        ]
      }
    }
  }
</script>
<style>
</style>
