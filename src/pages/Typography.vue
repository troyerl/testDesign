<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <card>
            <template slot="header">
              <BaseInput placeholder="Name" 
                         label="Playlist Name" 
                         class="w-50"
                         v-if="editPlaylist"
                         type="Search"
              />
              <h4 class="card-title" v-else>Peppa Pigga</h4>
            
            </template>
            <draggable
              class="list-group"
              tag="ul"
              v-model="list"
              v-bind="dragOptions"
              @start="drag = true"
              @end="drag = false"
            >
              <transition-group type="transition" :name="!drag ? 'flip-list' : null">
                <li
                  class="list-group-item d-flex align-items-baseline"
                  v-for="(element, idx) in list"
                  :key="element.order"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list me-3" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                  <div v-if="editPlaylist" class="w-100">
                    <BaseInput 
                         placeholder="Video Url" 
                         class="w-100"
                         v-model="element.name"
                         type="search"
                    />

                  </div>
                  <div v-else>
                    {{ element.name }}
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" class="bi bi-trash ms-3" viewBox="0 0 16 16" @click="onDelete(idx)">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg>
                </li>
              </transition-group>
            </draggable>
          </card>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
  import Card from 'src/components/Cards/Card.vue'
  import BaseInput from '../components/Inputs/BaseInput';
  import draggable from 'vuedraggable';
  const message = [
    "vue.draggable",
    "draggable",
    "component",
    "for",
    "vue.js 2.0",
    "based",
    "on",
    "Sortablejs"
  ];
  export default {
    components: {
      Card,
      BaseInput,
      draggable
    },
    data() {
      return {
        list: message.map((name, index) => {
          return { name, order: index + 1 };
        }),
        drag: false,
        id: this.$route.params.id,
        editPlaylist: false
      }
    },
    mounted() {
      this.editPlaylist = this.id === 'new';
    },
    computed: {
      dragOptions() {
        return {
          animation: 200,
          group: "description",
          disabled: false,
          ghostClass: "ghost"
        };
      }
    },
    methods: {
      onDelete(idx) {
        this.list.splice(idx, 1);
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
