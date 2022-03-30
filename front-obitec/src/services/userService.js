import api from './api';

export default {

  async listUsers() {
    try {
      const response = await api().get('/user');
      return response.data
      
    } catch (error) {
      return console.log(error);
    }
  },

  async NewUser(user) {
    try {
      const response = await api().post('/user', user);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  async editUser(user) {
    try {
      const response = await api().put('/user/${id}', user);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  async deleteUser() {
    const response = await api().put('/user/${id}');
    return response.data;
  },

};
