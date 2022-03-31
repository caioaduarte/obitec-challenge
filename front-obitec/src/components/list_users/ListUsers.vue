<template>
  <div>
    <h2>User's List</h2>
    <br/>
  <table class="table table-striped" style="width: 80rem">>
    <thead>
      <tr>
        <th class="text-center">UUID</th>
        <th class="text-center">Name</th>
        <th class="text-center">Email</th>
        <th class="text-center">Edit User</th>
        <th class="text-center">Delete User</th>
      </tr>
    </thead>
  </table>
      <tbody>
        <tr v-for="item in users" v-bind:key="person.uuid">
          <td>{{ item.uuid }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>
            <router-link :to="{ name: 'Edit-User', params: { id: item.uuid } }"
              class="btn btn-success">
              <font-awesome-icon :icon="['fas', 'edit']" />
            </router-link>
          </td>
          <td>
            <button @click="deleteUser(item.uuid) "class="btn btn-danger">
              <font-awesome-icon :icon="['fas', 'trash']" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
</template>
<script>

import userService from '../../services/userService';

export default {
  name: 'ListPage',
  data() {
    return {
      users: [],

    };
  },

  // mounted() is called after DOM has been mounted
  // so you can access the reactive component, templates, and DOM elements and manipulate them.
  mounted() {
    this.listAllUsers();
    console.log('Cheguei 111');
  },
  methods: {
    async listAllUsers() {
      const response = await userService.listUsers();
      console.log(response);
      console.log('Cheguei aqui');
      this.users = response;
    },
  },
};
</script>
