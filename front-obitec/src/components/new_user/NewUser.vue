<template>
  <div class="card" style="width: 25rem">
    <div class="card-body">
      <h5 class="card-title">Add New User</h5>
      <div class="card-text">
        <form @submit.prevent="submitForm()">
          <div class="form-group">
            <label for="uuid">UUID</label>
            <input
              v-model="user.uuid"
              type="text"
              class="form-control"
              id="uuid"
              name="uuid"
              placeholder="Enter UUID"
              v-bind:class="{ 'is-invalid': isSubmitted && $v.user.uuid.$error }"
            />
            <div v-if="isSubmitted && !$v.user.uuid.required" class="invalid-feedback">
            Universally Unique Identifier - UUID is required.</div>
          </div>
          <br />
          <div class="form-group">
            <label for="name">Name</label>
            <input
              v-model="user.name"
              type="text"
              class="form-control"
              id="name"
              name="name"
              placeholder="Enter Name"
              v-bind:class="{ 'is-invalid': isSubmitted && $v.user.name.$error }"
            />
            <div v-if="isSubmitted && !$v.user.name.required" class="invalid-feedback">
            Name is required.</div>
          </div>
          <br />
          <div class="form-group">
            <label for="email">Email</label>
            <input
              v-model="user.email"
              type="email"
              class="form-control"
              id="email"
              name="email"
              placeholder="Enter Email"
              v-bind:class="{ 'is-invalid': isSubmitted && $v.user.email.$error }"
            />
            <div v-if="isSubmitted && !$v.user.email.required" class="invalid-feedback">
            E-mail is required.</div>
          </div>
          <br />
          <!-- https://br.vuejs.org/v2/guide/events.html -->
          <button type="submit" class="btn btn-primary" @click="addNewUser">Add New User</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

import { required } from 'vuelidate/lib/validators';
import userService from '../../services/userService';

export default {
  name: 'NewUser',
  data() {
    return {
      user: {
        uuid: '',
        name: '',
        email: '',
      },
      isSubmitted: false,
    };
  },
  validations: {
    user: {
      uuid: { required },
      name: { required },
      email: { required },
    },
  },
  methods: {
    submitForm() {
      this.isSubmitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        this.$swal('Warning', 'Please complete all fields', 'error');
      }
    },
    async addNewUser() {
      await userService.NewUser(this.user);
      // Push to the UsersList page
      this.$router.push({
        name: 'List-Users',
      });
    },
  },
};
</script>
