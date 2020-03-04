import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.github.com/',
    timeout: 1000,
    headers: {'Authorization': 'token b1e42f07b4aa93e68525c1ebef7d19c4b60bb1d9'}
});