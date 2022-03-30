import axios from 'axios';

// https://axios-http.com/ptbr/docs/intro
export default () => axios.create({
  baseURL: 'http://localhost:3000/api',
});
