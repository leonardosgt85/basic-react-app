import axios from 'axios';

const api = axios.create({
    baseURL:'http://172.16.75.175:3333',
})

export default api;