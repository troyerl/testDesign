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
                    v-model="name">
          </base-input>
        </div>
        <div class="col-md-3">
          <base-input type="text"
                    label="Username"
                    placeholder="Username"
                    v-model="username">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="email"
                    label="Email"
                    placeholder="Email"
                    v-model="email">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <base-input type="text"
                    label="First Name"
                    placeholder="First Name"
                    v-model="firstName">
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input type="text"
                    label="Last Name"
                    placeholder="Last Name"
                    v-model="lastName">
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
                    v-model="address.street">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <base-input type="text"
                    label="City"
                    placeholder="City"
                    v-model="address.city">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="text"
                    label="Country"
                    placeholder="Country"
                    v-model="address.country">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="number"
                    label="Postal Code"
                    placeholder="ZIP Code"
                    v-model="address.zipcode">
          </base-input>
        </div>
      </div>

      <div class="text-center">
        <button type="submit" class="btn btn-danger btn-fill float-right" @click.prevent="updateProfile">
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
      ...mapState('hospitalInfo', [
        'name',
        'address'
      ]),
      ...mapState('auth', [
        'firstName',
        'lastName',
        'email',
        'username'
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
