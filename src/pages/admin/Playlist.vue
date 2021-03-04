<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header" >
              <BaseInput 
                placeholder="Name" 
                label="Playlist Name" 
                class="w-50"
                type="Search"
                v-if="editPlaylist"
              />
              <h4 class="card-title" v-else>{{selectedPlaylist.name}}</h4>
            </template>
            
            <draggable
              class="list-group"
              tag="ul"
              v-model="selectedPlaylist.videos"
              v-bind="dragOptions"
              @start="drag = true"
              @end="drag = false"
            >
              <transition-group type="transition" :name="!drag ? 'flip-list' : null">
                <li
                  class="list-group-item d-flex align-items-baseline"
                  v-for="video in selectedPlaylist.videos"
                  :key="video.id"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list me-3" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                  
                  <div v-if="editPlaylist" class="w-100">
                    <BaseInput 
                      placeholder="Video Url" 
                      class="w-100"
                      v-model="video.url"
                      type="search"
                    />
                  </div>
                  <div v-else>
                    <img style="width: 70px;" :src="`https://img.youtube.com/vi/${getVideoId(video.url)}/default.jpg`" alt=""/>
                    <span >{{ getTitle(video.url) }}</span>

                  </div>  
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-trash ms-3" viewBox="0 0 16 16" @click="onDelete(idx)">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg>
                </li>
              </transition-group>
            </draggable>
            <h3 class="text-center" v-if="list.length === 0">No Videos In Playlist</h3>

            <div class="d-flex justify-content-center mt-3" v-if="editPlaylist">
              <button type="submit" class="btn btn-info btn-fill text-center me-3" @click.prevent="addUrl">
                <i class="nc-icon nc-simple-add"></i> New Url
              </button>
              <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="onSave">
                Save
              </button>
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
    mounted() {
      this.editPlaylist = this.id === 'new';
    },
    data() {
      return {
        list: [
          {
            name: 'test',
            order: 0
          },
          {
            name: 'test1',
            order: 1
          }
        ],
        drag: false,
        id: this.$route.params.id,
        editPlaylist: false
      }
    },
    methods: {
      getVideoId(url) {
        return url.split('v=')[1];
      },
      async getTitle(url) {
        const videoId = url.split('v=')[1];

        let resData = await fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&id=" + videoId + "&key=" + process.env.VUE_APP_YOUTUBE_API, {
          method: 'GET'
        });

        let videoData = await resData.json();
        console.log(videoData);

        return 'test';
      },
      onDelete(idx) {
        this.list.splice(idx, 1);
      },
      addUrl() {
        this.list.push({
          name: '',
          order: this.list.length
        });
      },
      onSave() {
        this.editPlaylist = false;
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
