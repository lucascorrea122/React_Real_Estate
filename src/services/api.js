import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.dev.izee.com.br/v1/',
});

export default api;