import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.github.com/',
    timeout: 1000,
    headers: {'Authorization': 'token eebfad93df8cd46ad43e0679b06f1a7909ce6577'}
});