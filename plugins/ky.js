import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.github.com/',
    timeout: 1000,
    headers: {'Authorization': 'token 420e57b5049b69237c425adfbb581489a459e4ac'}
});