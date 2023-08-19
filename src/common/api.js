import axios from 'axios';

export default (url, method) => axios[method](process.env.VUE_APP_API_URL + url)
