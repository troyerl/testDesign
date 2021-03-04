<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8">
          <edit-profile-form>
          </edit-profile-form>
        </div>
        <div class="col-md-4">
          <card>
            <h4 slot="header" class="card-title">List of Medivue's</h4>

            <table class="table table-hover test">
              <thead>
                <tr>
                  <th scope="col" style="text-align: center !important" class="ps-1">#</th>
                  <th scope="col" style="text-align: center !important">Name</th>
                  <th scope="col" style="text-align: center !important">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr :key="medivue.id" v-for="(medivue, idx) of mediVues" class="text-center">
                  <td scope="row">{{idx + 1}}</td>
                  <td>{{medivue.name}}</td>
                  <td class="d-flex justify-content-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-pencil me-3" viewBox="0 0 16 16">
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
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
  import EditProfileForm from './UserProfile/EditProfileForm.vue'
  import UserCard from './UserProfile/UserCard.vue'
  import Card from 'src/components/Cards/Card';

  import { mapState } from 'vuex';

  export default {
    components: {
      EditProfileForm,
      UserCard,
      Card,
    },
    computed: {
      ...mapState('hospitalInfo', [
        'mediVues'
      ])
    }
  }

</script>
<style>

</style>
