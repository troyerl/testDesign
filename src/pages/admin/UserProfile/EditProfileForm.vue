<template>
  <card>
    <h4 slot="header" class="card-title">Profile Info</h4>
    <form>
      <div class="row">
        <div class="col-md-5">
          <base-input type="text"
                    label="Hospital"
                    :disabled="true"
                    placeholder="Hospital Name"
                    v-model="hospitalInfo.name">
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="text"
                    label="Username"
                    placeholder="Username"
                    v-model="userInfo.username">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="email"
                    label="Email"
                    placeholder="Email"
                    v-model="userInfo.email">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <base-input type="text"
                    label="First Name"
                    placeholder="First Name"
                    v-model="userInfo.firstName">
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input type="text"
                    label="Last Name"
                    placeholder="Last Name"
                    v-model="userInfo.lastName">
          </base-input>
        </div>
      </div>

      <hr>
      <h4 slot="header" class="card-title">Hospital Info</h4>
      <div class="row">
        <div class="col-md-12">
          <base-input type="text"
                    label="Address"
                    placeholder="Home Address"
                    v-model="hospitalInfo.address.street">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <base-input type="text"
                    label="City"
                    placeholder="City"
                    v-model="hospitalInfo.address.city">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="text"
                    label="Country"
                    placeholder="Country"
                    v-model="hospitalInfo.address.country">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="number"
                    label="Postal Code"
                    placeholder="ZIP Code"
                    v-model="hospitalInfo.address.zipcode">
          </base-input>
        </div>
      </div>

      <div class="text-center">
        <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="updateProfile">
          Update Profile
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
  import Card from 'src/components/Cards/Card.vue'
  import { mapState } from 'vuex';

  export default {
    components: {
      Card
    },
    computed: {
      ...mapState('auth', [
        'userInfo',
        'hospitalInfo'
      ])
    },
    methods: {
      updateProfile () {
        console.log(this.userInfo);
      }
    }
  }

</script>
<style>

</style>
