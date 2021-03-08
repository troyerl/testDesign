<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header" v-if="!loading">
              <div class="d-flex align-items-center">
                <BaseInput 
                  placeholder="Name" 
                  label="Playlist Name" 
                  class="w-25"
                  type="Search"
                  v-model="playlist.name"
                  v-if="editTitle"
                />
                <div v-else>
                  <h4 class="card-title">{{playlist.name}}</h4>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-pencil ms-3" viewBox="0 0 16 16" @click="onEditPlaylistTitle" v-if="!editTitle">
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                </svg>
              </div>
            </template>
            <div v-if="!loading">
              <draggable
                class="list-group"
                tag="ul"
                v-model="playlist.videos"
                v-bind="dragOptions"
                @change="onPlaylistChange"
                @start="drag = true"
                @end="drag = false"
              >
                <transition-group type="transition" :name="!drag ? 'flip-list' : null">
                  <li
                    class="list-group-item d-flex align-items-center justify-content-between"
                    v-for="(video, idx) in playlist.videos"
                    :key="video.id"
                  >
                    <div class="d-flex align-items-center w-100">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list me-3" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                      </svg>
                    
                      <div v-if="video.title && video.videoId">
                        <img style="width: 70px;" :src="`https://img.youtube.com/vi/${video.videoId}/default.jpg`" alt=""/>
                        <span class="ms-3">{{ video.title }}</span>
                      </div>
                      <div class="w-100 d-flex align-items-center" v-if="!video.title && !video.videoId">
                        <BaseInput 
                          placeholder="Url" 
                          class="w-75"
                          v-model="video.url"
                        />
                      </div>
                      
                    </div>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-trash ms-3" viewBox="0 0 16 16" @click="onDelete(idx)">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                  </li>
                </transition-group>
              </draggable>

              <h3 class="text-center" v-if="playlist.videos.length === 0">No Videos In Playlist</h3>

              <div class="d-flex justify-content-center mt-3" >
                <button type="submit" class="btn btn-info btn-fill text-center" @click.prevent="addUrl">
                  <i class="nc-icon nc-simple-add"></i> New Url
                </button>
                <button v-if="editPlaylist" type="submit" class="btn btn-success btn-fill float-right mx-3" @click.prevent="onSave">
                  Save
                </button>
                <button v-if="editPlaylist" type="submit" class="btn btn-secondary btn-fill float-right" @click.prevent="onCancel">
                  Cancel
                </button>
              </div>
            </div>
            <div class="d-flex flex-column justify-content-center align-items-center" v-else>
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <h3>{{loadingText}}</h3>
            </div>
          </card>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import Card from 'src/components/Cards/Card.vue'
  import BaseInput from 'src/components/Inputs/BaseInput';
  import draggable from 'vuedraggable';

  import { mapState } from 'vuex';

  export default {
    components: {
      Card,
      BaseInput,
      draggable
    },
    computed: {
      dragOptions() {
        return {
          animation: 200,
          group: "description",
          disabled: false,
          ghostClass: "ghost"
        };
      },
      ...mapState('hospitalInfo', [
        'selectedPlaylist'
      ])
    },
    created() {
      this.loading = true;
      this.loadingText = 'Loading Playlist...';
      this.loadPlaylist(this.id);
      this.editTitle = this.id === 'new';
    },
    data() {
      return {
        loading: false,
        loadingText: '',
        playlist: {
          videos: [],
          name: '',
          id: ''
        },
        drag: false,
        id: this.$route.params.id,
        editPlaylist: false,
        editTitle: false,
      }
    },
    watch: {
      '$route.params.id': function (id) {
        this.loadPlaylist(id);
        this.editTitle = true;
      }
    },
    methods: {
      loadPlaylist(id) {
        this.$store.dispatch('hospitalInfo/getPlaylist', id).then((playlist) => {
          this.playlist = playlist;
          this.loading = false;
        });
      },
      onDelete(idx) {
        this.playlist.videos.splice(idx, 1);
        this.onPlaylistChange();
      },
      addUrl() {
        this.playlist.videos.push({
          id: `new-${this.playlist.videos.length}`,
          order: this.playlist.videos.length,
          title: '',
          videoId: ''
        });
        this.onPlaylistChange();
      },
      onPlaylistChange() {
        this.editPlaylist = true;
      },
      onEditPlaylistTitle() {
        this.editTitle = true;
        this.onPlaylistChange();
      },
      onCancel() {
        this.playlist = JSON.parse(JSON.stringify(this.selectedPlaylist));
        this.editPlaylist = false;
        this.editTitle = false;
      },
      onSave() {
        this.loading = true;
        this.loadingText = 'Saving Playlist Changes...';
        this.editPlaylist = false;
        this.$store.dispatch('hospitalInfo/savePlaylist', this.playlist).then(() => {
          this.loading = false;
        });
      }
    }
  }

</script>
<style>
#searchinput {
    width: 200px;
}
#searchclear {
    position: absolute;
    right: 5px;
    top: 0;
    bottom: 0;
    height: 14px;
    margin: auto;
    font-size: 14px;
    cursor: pointer;
    color: #ccc;
}
</style>
