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
        <tr v-for="person in users" :key="person._id">
          <td>{{ person.uuid }}</td>
          <td>{{ person.name }}</td>
          <td>{{ person.email }}</td>
          <td>
            <!-- <router-link :to="{ name: 'Edit-User', params: { id: person._uuid } }"
              class="btn btn-success">
              <font-awesome-icon :icon="['fas', 'edit']" />
            </router-link> -->
          </td>
          <td>
            <!-- <button @click="deleteUser(person._uuid) "class="btn btn-danger">
              <font-awesome-icon :icon="['fas', 'trash']" />
            </button> -->
          </td>
        </tr>
      </tbody>
    </table>
    </div>
</template>
<script>

import userService from '../../services/userService';

export default {
  name: 'Listpage',
  data() {
    return {
      users: [],

    };
  },
  mounted() {
    this.listAllUsers();
    console.log('Cheguei 123');
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
